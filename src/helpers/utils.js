export const getImage = (category) => {

    let image = ''
  
    switch (category) {
      case 'Santé':
        image = require('../../assets/img/category/sante.png')
        break
      case 'Alimentaire':
        image = require('../../assets/img/category/shopping.png')
        break
      case 'Shopping':
        image = require('../../assets/img/category/shopping.png')
        break
      case 'Transport':
        image = require('../../assets/img/category/transport.png')
        break
      case 'Divertissement':
        image = require('../../assets/img/category/divertissement.png')
        break
      case 'Vacances':
        image = require('../../assets/img/category/divertissement.png')
        break
      case 'Logement':
        image = require('../../assets/img/category/habitation.png')
        break
      case 'Factures':
        image = require('../../assets/img/category/habitation.png')
        break
      case 'Autre':
        image = require('../../assets/img/category/habitation.png')
        break
      case 'Prestations sociales':
        image = require('../../assets/img/category/revenu.png')
        break
      case 'Autre revenu':
        image = require('../../assets/img/category/revenu.png')
        break
      case 'Revenu foncier':
        image = require('../../assets/img/category/revenu.png')
        break
      case 'Salaire et assimilé':
        image = require('../../assets/img/category/revenu.png')
        break
      case 'Revenu financier':
        image = require('../../assets/img/category/revenu.png')
        break
      case 'Pension alimentaire':
        image = require('../../assets/img/category/revenu.png')
        break
      case 'Rente':
        image = require('../../assets/img/category/revenu.png')
        break
      case 'Allocation chômage':
        image = require('../../assets/img/category/revenu.png')
        break
      case 'Revenu exceptionnel':
        image = require('../../assets/img/category/revenu.png')
        break
      default:
        image = require('../../assets/img/category/sante.png')
    }
    return image
}