export function verify(flag){
  if(flag){
    return true
  }else{
    window.location.href = 'http://localhost:8080/#/login';
    sessionStorage.setItem('flag',true);
    return false;
  }
}