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
    ddr? : string,
    flash? : string
}

interface Range {
    hob? : string,
    oven? : string,
    flamecontrol? : boolean,
    multiflame? : boolean,
    power? : string,
    timer? : boolean
}

interface AirConditioning {
    low? : boolean,
    functions? : string,
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
    steam? : boolean,
    display? : string,
    power? : string,
    maxload? : string,
    frequency? : string,
    maxspeed? : string,
    noisewashing? : string,
    noisespin? : string
}