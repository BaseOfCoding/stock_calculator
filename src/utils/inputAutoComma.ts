export function inputAutoComma(targetValue: string): string {
  var number = targetValue;
  var integer = targetValue;
  var point = number.indexOf('.');
  var decimal = '';
  var checked = '';
  var sign = '';

  if (number.charAt(0) == '.') {
    alert('첫 번째 입력에선 소수점 기호를 사용하실 수 없습니다.');
    checked = '';
    return '';
  }

  if (point > 0) {
    integer = number.substr(0, point);
    decimal = number.substr(point + 1, number.length);
    checked = inputNumberisFinite(decimal);

    if (checked == 'N') {
      alert('문자를 입력하시면 안됩니다.');
      checked = '';
      return '';
    }
  }

  integer = integer.replace(/\,/g, '');
  checked = inputNumberisFinite(integer);

  if (checked == 'N') {
    alert('문자를 입력하시면 안됩니다');
    checked = '';
    return '';
  }

  integer = inputNumberWithComma(inputNumberRemoveComma(integer));

  if (point > 0) {
    checked = inputDecimalPointMoreTwo(integer + '.' + decimal);

    if (checked == 'N') {
      alert('소수점을 두개 이상 입력하시면 안됩니다.');
      checked = '';
      return '';
    } else {
      return integer + '.' + decimal;
    }
  } else {
    return integer;
  }
}

function inputNumberisFinite(str: string): string {
  if (isFinite(Number(str)) == false) {
    return 'N';
  } else {
    return 'Y';
  }
}

function inputNumberWithComma(str: string): string {
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function inputNumberRemoveComma(str: string): string {
  return str.replace(/[^\d]+/g, '');
}

function inputDecimalPointMoreTwo(str: string): string {
  var count = 0;
  for (var step = 0; step < str.length; step++) {
    if (str[step] == '.') {
      count++;
    }
  }

  if (count > 1) {
    return 'N';
  } else {
    return 'Y';
  }
}
