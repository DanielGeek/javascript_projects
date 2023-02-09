/**
 * @param {number[][]} vec
 */
class Vector2D {
    constructor(v) {
      this.nums = [];
      for (const innerVector of v) {
        for (const num of innerVector) {
          this.nums.push(num);
        }
      }
      this.position = 0;
    }
  
    next() {
      if (!this.hasNext()) {
        throw new Error("No such element");
      }
      const result = this.nums[this.position];
      this.position++;
      return result;
    }
  
    hasNext() {
      return this.position < this.nums.length;
    }
  }
  
  /** 
   * Your Vector2D object will be instantiated and called as such:
   * var obj = new Vector2D(vec)
   * var param_1 = obj.next()
   * var param_2 = obj.hasNext()
   */