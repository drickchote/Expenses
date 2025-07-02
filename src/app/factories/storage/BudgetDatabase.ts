import { Budget } from "../../../shared/types"
import { AsyncStorageDatabase } from "../../../db/AsyncStorageDatabase"
import { BaseEntity, Storage } from "../../../db/storage"

const BUDGET_STORAGE_KEY = "BUDGETS"

export const buildBudgetDatabase = ():Storage<Budget> => {
    return new AsyncStorageDatabase<Budget & BaseEntity>(BUDGET_STORAGE_KEY)
}