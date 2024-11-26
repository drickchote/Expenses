import { BaseEntity, Storage } from "./storage";
import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncStorageDatabase <Entity extends BaseEntity> implements Storage<Entity>{

    private key

    constructor(key: string){
        this.key = key
    }

    async find(id: string): Promise<Entity | null>{
        if(!id){
            throw new Error("id is missing")
        }

        const list = await this.select()

        return list.find((item) => item.id === id) ?? null
    }

    async select(): Promise<Entity[]>{
        try{
            const value = await AsyncStorage.getItem(this.key)
            return value !== null ? JSON.parse(value) : []
        } catch(error){
            throw(`Error while selecting ${this.key}, ${error}`)
        }
    }

    async insert(data: Entity): Promise<Entity>{
        const list = await this.select()
        list.push(data)
        await AsyncStorage.setItem(this.key, JSON.stringify(list)).catch(error => console.log(error))
        return data;
    }

    async update(data: Entity): Promise<Entity>{
        const entity = await this.find(data.id)

        if (!entity){
            throw new Error(`${this.key} with id ${data.id} was Not found`)
        }

        const updatedEntity = {
            ...entity,
            ...data
        }

        const list = await this.select()
        const newList = list.reduce(item => item.id !== entity.id ? item : updatedEntity)
        await AsyncStorage.setItem(this.key, JSON.stringify(newList))
       
       return updatedEntity

    }
    async delete(id:string): Promise<Entity>{
        const list = await this.select()
        const newList = [] as Entity[]
        let deletedElement = {} as Entity

        list.forEach(item => {
            if(item.id !== id){
                newList.push(item)
            } else {
                deletedElement = item
            }
        })

        await AsyncStorage.setItem(this.key, JSON.stringify(newList))
        return deletedElement
    }
}