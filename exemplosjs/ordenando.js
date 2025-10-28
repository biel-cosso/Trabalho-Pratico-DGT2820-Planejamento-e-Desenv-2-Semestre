// ================================
// ORDENANDO.JS
// Implementação de algoritmos de ordenação e embaralhamento
// ================================

// ---------- BUBBLE SORT ----------
// Percorre o vetor várias vezes, comparando elementos adjacentes.
// Se o da esquerda for maior que o da direita, troca.
// A cada passada, o maior "bolha" para o final.
const bubble_sort = (arr) => {
  arr = arr.slice(); // copia para não alterar o original
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // troca de posição
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr; // retorna vetor já ordenado
};

// ---------- SELECTION SORT ----------
// Seleciona o menor elemento do vetor e coloca na frente.
// Repete esse processo até o vetor estar ordenado.
const selection_sort = (arr) => {
  arr = arr.slice(); // cria cópia
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i; // assume que o índice i é o menor
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j; // encontrou elemento menor → atualiza
      }
    }
    // troca arr[i] com arr[min]
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

// ---------- SWAP (apoio) ----------
// Troca os elementos nas posições i e j no vetor (in-place).
const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

// ---------- PARTITION (apoio para quick sort) ----------
// Particiona o vetor entre low..high usando o último elemento como pivot.
const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
};

// ---------- QUICK SORT (in-place recursivo) ----------
// Assinatura: quick_sort(arr, low, high)
const quick_sort = (arr, low, high) => {
  // Se chamada apenas com o vetor, cria cópia e ordena toda a faixa
  if (typeof low === 'undefined' || typeof high === 'undefined') {
    const copia = arr.slice();
    if (copia.length <= 1) return copia;
    quick_sort(copia, 0, copia.length - 1);
    return copia;
  }

  // caso recursivo in-place
  if (low < high) {
    const pi = partition(arr, low, high);
    quick_sort(arr, low, pi - 1);
    quick_sort(arr, pi + 1, high);
  }
  return arr;
};

// ---------- SHUFFLE ----------
// Embaralhamento aleatório (algoritmo Fisher-Yates).
// Vai percorrendo o vetor de trás para frente,
// trocando o elemento atual com outro aleatório anterior.
// ---------- SHUFFLE ----------
// Pode operar de duas formas:
// - shuffle(arr) -> usa Fisher-Yates para embaralhar completamente e retorna cópia
// - shuffle(arr, swaps) -> realiza 'swaps' trocas aleatórias (útil para demonstração)
const shuffle = (arr, swaps) => {
  arr = arr.slice(); // cria cópia
  const n = arr.length;
  if (typeof swaps === 'number' && swaps > 0) {
    // realiza um número fixo de trocas aleatórias
    for (let k = 0; k < swaps; k++) {
      const i = Math.floor(Math.random() * n);
      const j = Math.floor(Math.random() * n);
      swap(arr, i, j);
    }
    return arr;
  }

  // Fisher-Yates completo
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    swap(arr, i, j);
  }
  return arr;
};
