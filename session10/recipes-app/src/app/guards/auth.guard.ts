import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('Route:' + route + 'State' + state)
  // localStorage.setItem('ACCESS_TOKEN', token)
  if(localStorage.getItem('ACCESS_TOKEN')){
    return true;
  }else{
    alert('You don\'t have permission to access this page')
    return false;
  }
};
