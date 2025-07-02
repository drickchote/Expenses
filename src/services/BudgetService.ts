import { Budget } from "../shared/types";
import { BaseEntity, Storage } from "../db/storage";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

type BudgetInsert = Omit<Budget, 'id'> 

export class BudgetService {
    private storage;

    constructor(storage: Storage<Budget>){
        this.storage = storage
    }

    async getAll(): Promise<(Budget & BaseEntity)[]>{
        const rawData = await this.storage.select()

        return rawData.map(budget => ({
            ...budget,
            date: new Date(budget.date)
        }))
    }

    async getCurrentMonthBudget(): Promise<Budget | null>{
        const budgets = await this.getCurrentYearBudgets()
        const currentMonth = new Date().getMonth()
        const currentMonthBudget = budgets.find(budget => budget.date.getMonth() === currentMonth)
        return currentMonthBudget ?? null
    }

    async getCurrentYearBudgets(): Promise<Budget[]>{
        const budgets = await this.getAll()
        const currentYear = new Date().getFullYear()
        const currentYearBudget = budgets.filter(budget => budget.date.getFullYear() === currentYear)
        return currentYearBudget 
    }

    async insert(data: BudgetInsert): Promise<Budget>{
        const budget = {
            id: uuidv4(),
            value: data.value,
            date: data.date
        }

        return this.storage.insert(budget)
    }

    async find(id: string): Promise<Budget | null>{
        return this.storage.find(id)
    }

    async update(id: string, data: Budget): Promise<Budget>{
        const budget = await this.find(id)

        if(budget === null){
            throw new Error("Budget not found", {cause: 404})
        }

        budget.value = data.value
        budget.date = data.date

        return this.storage.update(budget)
    }

    async delete(id: string): Promise<Budget & BaseEntity>{
        const budget = await this.find(id)

        if(budget === null){
            throw new Error("Budget not found", {cause: 404})
        }

        return this.storage.delete(id)
    }
}