from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
from app.models.model import User
from app.dao.dao_category import CategoryDAO
from app.schemas.schema_category import CategoryResponseDTO, CategoryCreateDTO, CategoryUpdateDTO
from app.dao import dao_user
from app.database.database import get_db

router = APIRouter(prefix="/categories", tags=["categories"])

@router.post("/", response_model=CategoryResponseDTO)
async def create_category(category: CategoryCreateDTO, db: AsyncSession = Depends(get_db)):
    """Creates a new category"""
    try:
        dao_category = CategoryDAO(db)
        new_category = await dao_category.create_category(
            name=category.name,
            description=category.description
        )
        return new_category
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail= f"Error creating category{e}") from e

@router.get("/", response_model=List[CategoryResponseDTO])
async def get_categories(db: AsyncSession = Depends(get_db)):
    """Fetches all categories"""
    try:
        dao_category = CategoryDAO(db)
        categories = await dao_category.get_all_categories()
        return categories
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error retrieving categories") from e

@router.get("/{category_id}", response_model=CategoryResponseDTO)
async def get_category_by_id(category_id: int, db: AsyncSession = Depends(get_db)):
    """Fetches a category by its ID"""
    try:
        dao_category = CategoryDAO(db)
        category = await dao_category.get_category_by_id(category_id)
        if category is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")
        return category
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error retrieving category") from e

@router.put("/{category_id}", response_model=CategoryResponseDTO)
async def update_category(category_id: int, category: CategoryUpdateDTO, db: AsyncSession = Depends(get_db)):
    """Updates a category's name or description"""
    try:
        dao_category = CategoryDAO(db)
        existing_category = await dao_category.get_category_by_id(category_id)
        if existing_category is None:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")

        updated_category = await dao_category.update_category(
            category_id=category_id,
            name=category.name,
            description=category.description
        )
        return updated_category
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error updating category") from e

# @router.delete("/{category_id}", status_code=status.HTTP_204_NO_CONTENT)
# async def delete_category(category_id: int, current_user: User = Depends(dao_user.get_current_user), db: AsyncSession = Depends(get_db)):
#     """Deletes a category by its ID"""
#     try:
#         dao_category = CategoryDAO(db)
#         category = await dao_category.get_category_by_id(category_id)
#         if category is None:
#             raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Category not found")

#         await dao_category.delete_category(category_id)
#     except Exception as e:
#         raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Error deleting category") from e
