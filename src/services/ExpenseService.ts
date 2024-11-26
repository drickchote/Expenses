import { Expense } from "../shared/types";
import { BaseEntity, Storage } from "../db/storage";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

type ExpenseInsert = Omit<Expense, 'id'> 

export class ExpenseService {
    private storage;

    constructor(storage: Storage<Expense>){
        this.storage = storage
    }

    async getAll(): Promise<(Expense & BaseEntity)[]>{
        const rawData = await this.storage.select()

        return rawData.map(expense => ({
            ...expense,
            date: new Date(expense.date)
        }))
    }

    async insert(data: ExpenseInsert): Promise<Expense>{
        const expense = {
            id: uuidv4(),
            description: data.description,
            value: data.value,
            date: data.date
        }

        return this.storage.insert(expense)
    }

    async find(id: string): Promise<Expense | null>{
        return this.storage.find(id)
    }

    async update(id: string, data: Expense): Promise<Expense>{
        const expense = await this.find(id)

        if(expense === null){
            throw new Error("Expense not found", {cause: 404})
        }

        expense.description = data.description
        expense.value = data.value
        expense.date = data.date

        return this.storage.update(expense)
    }

    async delete(id: string): Promise<Expense & BaseEntity>{
        const expense = await this.find(id)

        if(expense === null){
            throw new Error("Expense not found", {cause: 404})
        }

        return this.storage.delete(id)
    }
}