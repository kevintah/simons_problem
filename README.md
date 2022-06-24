 //References
 //https://aws.amazon.com/blogs/quantum-computing/simons-algorithm/
 //https://leimao.github.io/blog/Simon-Algorithm/
 //https://young.physics.ucsc.edu/150/simon.pdf
 //https://jonathan-hui.medium.com/qc-simons-algorithm-be570a40f6de
 //https://www.cs.ubc.ca/~condon/cpsc506/lectures/lec19.pdf
 
 Problem:
 
 Oracle 

 f: {0,1}^n --> {0,1}^n

 Promise 

 s elem {0,1}^n  for  x,y  elem {0,1}^n

 f(x)= f(y)  iff x bitwise addition elem {0^n, s}
     
    f(x) =  f(x bitwise addition a)

       pick 'a' and populate f(x)


    x    |  f(x)
    000  |
    001  |
    011  |
    111  |
    010  |
    110  |
    101  |
    010  |
   