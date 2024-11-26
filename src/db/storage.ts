export interface BaseEntity{
    id: string
}

export interface Storage<Entity> {
    select(): Promise<(Entity & BaseEntity)[]>
    find(id: string): Promise<Entity | null>
    update(data: Entity): Promise<Entity>
    insert(data: Entity): Promise<Entity>
    delete(id:string): Promise<Entity & BaseEntity>
}