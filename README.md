 //References
 
 //https://en.wikipedia.org/wiki/Simon%27s_problem#:~:text=In%20computational%20complexity%20theory%20and,that%20is%2C%20traditional)%20computer.

 //https://aws.amazon.com/blogs/quantum-computing/simons-algorithm/

 //https://leimao.github.io/blog/Simon-Algorithm/

 //https://young.physics.ucsc.edu/150/simon.pdf

 //https://jonathan-hui.medium.com/qc-simons-algorithm-be570a40f6de

 //https://www.cs.ubc.ca/~condon/cpsc506/lectures/lec19.pdf

 //https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/

 //https://pages.cs.wisc.edu/~vernon/cs367/notes/3.COMPLEXITY.html

 //https://medium.com/quantum-untangled/simons-algorithm-quantum-algorithms-untangled-62c8f81ed27a
 
 Problem:
 
 Oracle 

 f: {0,1}^n --> {0,1}^n

 Promise 

 s elem {0,1}^n  for  x,y  elem {0,1}^n

 f(x)= f(y)  iff x bitwise addition elem {0^n, s}
     
    f(x) =  f(x bitwise addition a)
      
       let n = 3;

       pick  a secret 's' and populate f(x)

      

    x    |  f(x)
    000  |
    001  |
    011  |
    111  |
    010  |
    110  |
    101  |
    010  |
   
   |range(f)|= 2^(n-1) ~ 2^2 ~4

    big O  for code complexity

     do best case/ worst case analysis for code 

       something like ~O(n^2) for code written   

     guess for classical COMPLEXITY  ~ O(2^(n - 1) + 1)
         ---- Explanation
               |range(f)| = 2^(n-1)     --- This is half
            one is guaranteed to get a collision on the next step
              so  O(|range(f)| + 1)  ~ O(2^(n - 1) + 1) 
   