export interface Some {
    id : string;
    value : string;
    active : boolean;
}

export interface Link {
    active: any;
    id : string,
    path : string,
    name : string
}

export interface Data {
    name : string,
    number : string,
    message : string
}

export interface MemberType {
    id : string,
    name : string,
    position : string,
    img : string
}

export interface ProductType extends Tv, Range, AirConditioning, Smartphone, Washmachine {
    id : string,
    category : string,
    name : string,
    comp : string,
    img : string,
    color : string,
    type? : string,
    new? : boolean
}

interface Tv {
    version? : string,
    wifi? : boolean,
    multilang? : boolean,
    parent? : boolean,
    support? : string,
    ddr? : string,
    flash? : string
}

interface Range {
    hob? : string,
    oven? : string,
    surface? : string,
    ovendoor? : boolean,
    electricignition? : boolean,
    flamecontrol? : boolean,
    multiflame? : boolean,
    power? : string,
    timer? : boolean
}

interface AirConditioning {
    low? : boolean,
    functions? : string,
    restart? : boolean,
    area? : string,
    freon? : string,
    cooling? : string,
    heating? : string
}

interface Smartphone {
    cpu? : string,
    os? : string,
    screen? : string,
    resolution? : string,
    displaytype? : string,
    ram? : string,
    rom? : string
}

interface Washmachine {
    motor? : string,
    automatic? :string,
    steam? : boolean,
    display? : string,
    power? : string,
    maxload? : string,
    frequency? : string,
    maxspeed? : string,
    noisewashing? : string,
    noisespin? : string
}