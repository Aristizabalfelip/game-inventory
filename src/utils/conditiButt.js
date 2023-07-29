import imgRow from '../assets/swordIcon.png'
import imgShield from '../assets/shieldIcon.png' 
import imgArmor from '../assets/armorIcon.png' 

export const handleClick = (name,array) => {

if (name=== 'weapons') {
 return array.weapons
}if (name=== 'shields') {
    return array.shields
} if (name=== 'armors') {
    return array.armors
}
   
}

export const nameFuntion = (name) => {

    if (name === 'weapons') {
        return imgRow
    }
    if (name === 'shields') {
        return imgShield
    }
    if (name === 'armors') {
        return imgArmor
    }
}