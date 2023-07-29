import armorIcon from '../assets/armorIcon.png'
import shield from '../assets/shieldIcon.png'
import swordIcon from '../assets/swordIcon.png'



export const valuesFuntion = (parts, category) => {

    if (category === 'armor') {
        const arrayValues = parts.map(obj => obj.stats['armor'])
        const numbers = arrayValues.filter((elemento) => typeof elemento === 'number' && !isNaN(elemento));
        return numbers.reduce((acu, num) => acu + num, 0) + 10
    }
    if (category === 'weapon') {
        const arrayValues = parts.map(obj => obj.stats['damage'])
        const numbers = arrayValues.filter((elemento) => typeof elemento === 'number' && !isNaN(elemento));
        return numbers.reduce((acu, num) => acu + num, 0) + 10
    } else {
        const arrayValues = parts.map(obj => obj.stats['defense'])
        const numbers = arrayValues.filter((elemento) => typeof elemento === 'number' && !isNaN(elemento));
        return numbers.reduce((acu, num) => acu + num, 0) + 10
    }
}


export const comparation = (select,parts) => {
    




    // console.log(select.category == 'weapon' ? 10 : 1);
 if (select.category === 'weapon') {


//   parts.map(obj => obj.stats[Object.keys(select.stats)]) > 0



    return   parts.map(obj => obj.stats[Object.keys(select.stats)]) > 0 ?   parts.map(obj => obj.stats[Object.keys(select.stats)]) : 10
 }
 if (select.category === 'shield') {
    return parts.map(obj => obj.stats[Object.keys(select.stats)]) > 0 ? parts.map(obj => obj.stats[Object.keys(select.stats)]) : 10
 }
 if (select.category === 'helm' || select.category === 'greave' || select.category === 'armor') {
    return parts.map(obj => obj.stats[Object.keys(select.stats)])
 }
 

}




export const icons = (select) => {
if (select.category === 'weapon') {
    return swordIcon
}
if (select.category === 'shield') {
    return shield
}
if (select.category === 'helm' || select.category === 'greave' || select.category === 'armor') {
    return armorIcon
}
}