# collision-app-demo
It is an React App for analyzing the collisions between strings.

**DEMO: https://cwvick.github.io/collision-app-demo/**

![image](https://user-images.githubusercontent.com/4215862/112591754-ce4a6d00-8e3f-11eb-8f5f-f4d55070d8fd.png)


### Definition of Collision
- Given an integer K
- Given a string S1
- Given a string S2
- S1 and S2 collide if they contains a common substring of length K
- Example:
  - K=3
    - “CABCK“ collides with GGGABCD
    - “CABCK” does not collide with WXYZ

 ### Assumptions
 - The input string accepts capital letters only and ignore spaces
 - There is no limitation for amount of inputs
 - If the integer less than 2, the strings will collid with each others
 
 ### Future Development
 - Optimize the function `checkCollision` with more efficient algorithm
 - Improve UI/UX
 - Error handling and display error message
 - Enhance test cases to cover more scenarios
 - Introduce End-to-End testing
