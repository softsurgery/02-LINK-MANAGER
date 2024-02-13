import axios, { AxiosResponse } from 'axios';
import { Category } from './types';

const baseUrl = 'http://example.com';

async function getAllCategories(): Promise<Category[]> {
    try {
        const response: AxiosResponse<Category[]> = await axios.get(`${baseUrl}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

async function getCategoryById(id: number): Promise<Category> {
    try {
        const response: AxiosResponse<Category> = await axios.get(`${baseUrl}/categories/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching category with ID ${id}:`, error);
        throw error;
    }
}

async function createCategory(newCategory: Category): Promise<Category> {
    try {
        const response: AxiosResponse<Category> = await axios.post(`${baseUrl}/categories`, newCategory);
        return response.data;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
}

async function updateCategory(id: number, updatedCategory: Category): Promise<Category> {
    try {
        const response: AxiosResponse<Category> = await axios.put(`${baseUrl}/categories/${id}`, updatedCategory);
        return response.data;
    } catch (error) {
        console.error(`Error updating category with ID ${id}:`, error);
        throw error;
    }
}

async function deleteCategory(id: number): Promise<void> {
    try {
        await axios.delete(`${baseUrl}/categories/${id}`);
    } catch (error) {
        console.error(`Error deleting category with ID ${id}:`, error);
        throw error;
    }
}

export const CategoryApi = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}