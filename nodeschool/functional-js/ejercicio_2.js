
function repeat(operation, num) {

  /*
   * ------------------------------
   * let i;
   * for(i = 0; i < num;i++){
   *   operation()
   * }
   * ------------------------------
   * ------------------------------
   * let i = num
   * ------------------------------
   * while(i <= num){
   *    operation()
   * }
   * ------------------------------
   * do{
   *   operation()
   * }while(num <= i)
   * ------------------------------
   * 
   */

  if (num <= 0) return;

  operation();

  repeat(operation, --num)
}

module.exports = repeat