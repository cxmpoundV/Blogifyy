from sqlalchemy import select
from sqlalchemy.orm import Session
from sqlalchemy import or_, select, func
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional
from app.models.model import Blog
from sqlalchemy.orm import aliased
from sqlalchemy.orm import selectinload

from app.models.model import Blog
 
class BlogDAO:
    
    def __init__(self, db: Session):
        self.db = db
    
    async def get_all_blogs(self) -> List[Blog]:

        """Fetch all blogs from the database."""

        result = await self.db.execute(select(Blog).filter(Blog.is_published == True))
        return result.scalars().all()
 
    async def create_blog(self, title: str, content: str, is_published : bool, category_id : int, user_id: int):
        new_blog = Blog(title = title, content = content, is_published = is_published, category_id = category_id, user_id = user_id)
        self.db.add(new_blog)
        await self.db.commit()
        await self.db.refresh(new_blog)
        return new_blog
 
    async def get_blogs_by_id(self, blog_id: int):

        result = await self.db.execute( select(Blog).filter(Blog.blog_id == blog_id))
        return result.scalars().first()
 
    async def get_blogs_by_user(self, user_id: int):

        result = await self.db.execute( select(Blog).filter(Blog.user_id == user_id))
        # print(f"reusultant blogs for user : {type(result.scalars().all())}")
        return result.scalars().all()
 
    async def update_blog(self, blog_id: int, title: str, is_published : bool, content: str, category_id : int):

        #check if the blog exists or not (incompleted)

        blog = await self.get_blogs_by_id(blog_id)
        if blog:
            blog.title = title if title else blog.title 
            blog.content = content if content else blog.content
            blog.is_published = is_published
            blog.category_id = category_id if category_id else blog.category_id
            await self.db.commit()
            await self.db.refresh(blog)
        return blog
 
    async def delete_blog(self, blog_id: int):
 
        #check if the blog exists or not (incompleted)

        blog = await self.get_blogs_by_id(blog_id)
        if blog:
            await self.db.delete(blog)
            await self.db.commit()
        return blog

    async def toggle_publish_status(self, blog_id: int):

        """Toggle the blog's published status."""

        query = select(Blog).filter(Blog.blog_id == blog_id)
        result = await self.db.execute(query)
        blog = result.scalars().first()

        blog.is_published = not blog.is_published  
        await self.db.commit()
        await self.db.refresh(blog)
        return blog
    async def get_blogs_by_category_id(self, cat_id : int):

        """ Get Blogs by Category Id"""

        
        result = await self.db.execute( select(Blog).filter(Blog.category_id == cat_id))
        return result.scalars().all()
    

class BlogSearchDAO:  # add this functionlity inside the same original BlogDAO class (incomplete)
    def __init__(self, db: AsyncSession):
        self.db = db

    async def search_blogs(
        self,
        search_query: str,
        # category_id: Optional[int] = None,
        # page: int = 1,
        # page_size: int = 10
    ):
        """
        Search blogs by title, content, or category with pagination.
        """
        query = select(Blog)

        # Apply search filters if query exists
        if search_query:
            terms = search_query.strip().split()
            search_conditions = [or_(Blog.title.ilike(f"%{term}%"), Blog.content.ilike(f"%{term}%")) for term in terms]
            query = query.filter(*search_conditions)

        # # Apply category filter if provided
        # if category_id:
        #     query = query.filter(Blog.category_id == category_id)

        # Order by most recent & paginate
        query = query.order_by(Blog.created_at.desc()).filter(Blog.is_published == True)  #.offset((page - 1) * page_size).limit(page_size)
        
        # Fetch results
        result = await self.db.execute(query)
        blogs = result.scalars().all()

        # # Get total count for pagination
        # count_query = select(func.count()).select_from(Blog)
        # if search_query:
        #     count_query = count_query.filter(*search_conditions)
        # if category_id:
        #     count_query = count_query.filter(Blog.category_id == category_id)

        # total_count = (await self.db.execute(count_query)).scalar()

        return blogs
            # "total": total_count,
            # "page": page,
            # "page_size": page_size,
            # "total_pages": (total_count + page_size - 1) // page_size
        
