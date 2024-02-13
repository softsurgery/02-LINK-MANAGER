import axios, { AxiosResponse } from 'axios';
import { Item } from './types';

const baseUrl = 'http://example.com';

async function getAllItems(): Promise<Item[]> {
    try {
        const response: AxiosResponse<Item[]> = await axios.get(`${baseUrl}/item`);
        return response.data;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
}

async function getItemById(id: number): Promise<Item> {
    try {
        const response: AxiosResponse<Item> = await axios.get(`${baseUrl}/item/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching item with ID ${id}:`, error);
        throw error;
    }
}

async function createItem(newItem: Item): Promise<Item> {
    try {
        const response: AxiosResponse<Item> = await axios.post(`${baseUrl}/item`, newItem);
        return response.data;
    } catch (error) {
        console.error('Error creating item:', error);
        throw error;
    }
}

async function updateItem(id: number, updatedItem: Item): Promise<Item> {
    try {
        const response: AxiosResponse<Item> = await axios.put(`${baseUrl}/item/${id}`, updatedItem);
        return response.data;
    } catch (error) {
        console.error(`Error updating item with ID ${id}:`, error);
        throw error;
    }
}

async function deleteItem(id: number): Promise<void> {
    try {
        await axios.delete(`${baseUrl}/item/${id}`);
    } catch (error) {
        console.error(`Error deleting item with ID ${id}:`, error);
        throw error;
    }
}

export const CategoryApi = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
}