function NewtonRaphson(f, tolerance = 1e-7, iterations = 1000, epsilon = 1e-14) {
  this.f          = math.parse(f);
  this.fPrime     = math.derivative(f, "x");
  this.tolerance  = math.parse(tolerance);
  this.iterations = math.parse(iterations);
  this.epsilon    = math.parse(epsilon);

  this.calculate = function(x0, iteration = 1) {
    if (iteration > this.iterations)
      throw new Error("Max iteration count reached");
  
    var y      = this.f.evaluate({"x": x0});
    var yPrime = this.fPrime.evaluate({"x": x0});

    if (Math.abs(yPrime) < this.epsilon) 
      throw new Error("Denominator too small");

    var x1 = x0 - y / yPrime;

    if (Math.abs(x1 - x0) <= this.tolerance) return x0;

    console.log("iteration " + iteration + " complete with result " + x0);

    return this.calculate(x1, iteration + 1);
  }
}
