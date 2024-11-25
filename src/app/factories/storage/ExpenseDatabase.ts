import { Expense } from "../../../shared/types"
import { AsyncStorageDatabase } from "../../../db/AsyncStorageDatabase"
import { BaseEntity, Storage } from "../../../db/storage"

const EXPENSE_STORAGE_KEY = "EXPENSES"

export const buildExpenseDatabase = ():Storage<Expense> => {
    return new AsyncStorageDatabase<Expense & BaseEntity>(EXPENSE_STORAGE_KEY)
}