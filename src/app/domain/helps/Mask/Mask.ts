export class Mask {
  transformAmount(element: any) {
    let val = element.target.value;
    val = val.replace(/\D/g, ''); // substitui qualquer caracter que não seja número por nada
    val = val.replace(/(\d)(\d{2})$/, '$1,$2'); // coloca virgula antes dos 2 últimos dígitos
    val = val.replace(/(?=(\d{3})+(\D))\B/g, '.'); // coloca ponto a cada 3 dígitos
    if (val.length > 0) {
      val = `R$ ${val}`; // adiciona o prefixo
    }
    element.target.value = val;
  }

  transformPercent(element: any) {
    let val = element.target.value;
    val = val.replace(/\D/g, ''); // substitui qualquer caracter que não seja número por nada
    val = val.replace(/(\d)(\d{2})$/, '$1,$2'); // coloca virgula antes dos 2 últimos dígitos
    val = val.replace(/(?=(\d{3})+(\D))\B/g, ''); // coloca ponto a cada 3 dígitos
    if (val.length > 0) {
      val = `${val} %`; // adiciona o prefixo
    }
    element.target.value = val;
  }
}
