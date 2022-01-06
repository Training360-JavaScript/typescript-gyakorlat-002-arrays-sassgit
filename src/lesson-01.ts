export default class calculator {
    // A változókat az osztályon belül így hozhatod létre.
    active: boolean = false;

    // Hozd létre a következő változókat a megfelelő típusannotációval.
    
    /** @type {Array} points - számok tömbje, 1-től 10-ig egyesével. */
    points: Array<number> = Array.from({length:10}).map((e,i) => i + 1);


    /** 
     * A tömb minden eleme legyen egy objektum, amely egy felhasználót reprezentál.
     * Kötelező elemek: name<string>, email<string>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} users - minden elem egy felhasználó.
     */
    users: Array<{name:string, email:string}> = [
        {name: 'a', email:'a@b.c'},
        {name: 'd', email:'e@b.f'},
        {name: 'g', email:'h@i.j'},
    ];
    
    /** 
     * A tömb minden eleme legyen egy objektum, amely egy terméket reprezentál.
     * Kötelező elemek: name<string>, price<number>, stock<number>.
     * Opcionális elemek: active<boolean>.
     * Inicializáld a tömböt, legyen legalább két eleme.
     * @type {Array} products - minden elem egy termék.
     */    
    products: Array<{name: string, price:number, stock:number, active?: boolean}> = 
    [
        {name: 'a', price: 12, stock: 3},
        {name: 'b', price: 45, stock: 6, active: false},
        {name: 'c', price: 78, stock: 9, active: true},
    ];
    
    /** 
     * Inicializálj egy tuple típust, azaz adj neki értéket is.
     * @type {Tuple} role - number, string, boolean. 
     */
    role: [number, string, boolean] = [1,'a', false];

}
