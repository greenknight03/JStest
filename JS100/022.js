// 배수인지 확인하기
// 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?

/*
1)  i / 6 == 0   // 나누기 몫
2)  i % 6 == 0   // 
3)  i & 6 == 0   // 비트연산자  
4)  i | 6 == 0   // 비트연산자 
5)  i // 6 == 0  // 주석처리 
 */

// i를 6으로 나눴을때 나머지가 0으로 나눠떨어지면 된다. 고로 나머지연산 %
// 정답은 2번

// & , | 비트연산자 - 피연산자들을 이진수로 바꿔서 각 자리수를 비교함
