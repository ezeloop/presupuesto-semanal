export const revisarPresupuesto = (presupusto, restante) => {
    let clase;

    if( (presupusto/4) > restante){
        clase= 'alert alert-danger';
    }
    else if ( (presupusto/2) > restante){
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success'
    }
    return clase;
}

// 100/4 = 25%