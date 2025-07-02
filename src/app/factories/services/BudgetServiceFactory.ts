import { BudgetService } from "../../../services/BudgetService";
import { buildBudgetDatabase } from "../storage/BudgetDatabase";

export const buildBudgetService = () => {
    const database = buildBudgetDatabase() 
    return new BudgetService(database)
}