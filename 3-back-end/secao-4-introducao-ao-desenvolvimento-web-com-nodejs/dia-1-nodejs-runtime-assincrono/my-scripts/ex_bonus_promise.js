async function testPromisse(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if (
      typeof n1 !== 'number' ||
      typeof n2 !== 'number' ||
      typeof n3 !== 'number'
    )
      reject(new Error('Informe apenas números'));
    const result = (n1 + n2) * n3;
    if (result < 50) reject(new Error('Valor muito baixo'));
    resolve(result);
  });
}

async function testFunction() {
  try {
    const result = await testPromisse(1, 2, 30);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

testFunction();
