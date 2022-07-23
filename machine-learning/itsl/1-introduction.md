# ITSL / Introduction

Let the number of observations be $n$.

Let the number of variables be $p$.

To denote the value of the $j$th variable for the $i$th observation (or sample), where $i = 1, 2, ..., n$ and $j = 1, 2, ..., p$, use:
$$
x_{ij}
$$

An $n \times p$ matrix $\bold{X}$ whose $(i,j)$th element is $x_{ij}$:
$$
\bold{X} = 
\left[ {\begin{array}{cc}
x_{11} & x_{12} & \cdots & x_{1p}\\
x_{21} & x_{22} & \cdots & x_{2p}\\
\vdots & \vdots & \ddots & \vdots\\
x_{n1} & x_{n2} & \cdots & x_{np}
\end{array} } \right]
$$

The rows of $\bold{X}$ are written as $x_{1}, x_{2}, \cdots, x_{n}$, where any row $x_{i}$ is a vector of length $p$ containing $p$ variable measurements for the $i$th observation. That is,
$$
x_{i} =
\left[ {\begin{array}{cc}
x_{i1}\\
x_{i2}\\
\vdots\\
x_{ip}
\end{array}} \right]
$$

Note that the matrix above is represented vertically, because vectors are normally represented vertically, but it is actually a _row_ belonging to $\bold{X}$.

The columns of $\bold{X}$ are written $\bold{x}_{1}, \bold{x}_{2}, \cdots, \bold{x}_{p}$. Note the bolded formatting (vs indented for rows). Each vector is of length $n$, so:
$$
\bold{x}_{j} = 
\left[ {\begin{array}{cc}
x_{1j}\\
x_{2j}\\
\vdots\\
x_{nj}\\
\end{array}} \right]
$$

So, we can rewrite $\bold{X}$ as:
$$
\bold{X} =
\left(
\bold{x}_{1}, \bold{x}_{2}, \cdots, \bold{x}_{p}
\right)
$$

Alternatively, it can be written as:
$$
\bold{X} =
\left[\begin{array}{cc}
x_1^T\\
x_2^T\\
\vdots\\
x_n^T
\end{array}\right]
$$

...where $^T$ represents the _transpose_ of a vector.

Similarly,
$$
x_i^T =
\left(
x_{i1}\quad
x_{i2}\quad
...\quad
x_{ip}
\right)
$$

We use $y_i$ to denite the $i^{th}$ observation of the variable on which we wish to make predictions. Hence, the set of all $n$ observations in vector form are written:
$$
\bold{y} = 
\left(\begin{array}{cc}
y_1\\
y_2\\
\vdots\\
y_n
\end{array}\right)
$$

To indicate a scalar: $a \in \mathbb{R}$

To indicate a vector of length $k$: $a \in \mathbb{R}^k$

To indicate an $r \times s$ matrix: $\bold{A} \in \mathbb{R}^{r \times s}$

For matrix multiplication, we have $\bold{A} \in \mathbb{R}^{r \times d}$ and $\bold{B} \in \mathbb{R}^{d \times s}$, then the product is denoted $\bold{AB}$. Note that the number of number of columns in $\bold{A}$ is the same as the number of rows in $\bold{B}$. Multiply each element in the $i^{th}$ row of $\bold{A}$ to the corresponding element in the $j^{th}$ column of $\bold{B}$, producing an $r \times s$ matrix.

Organization of book:
- Chapter 2-6: linear methods
  - Chapter 2: basic terminology, K-nearest classifier,
  - Chapter 3: linear regression,
  - Chapter 4: logistic regression, linear discriminant analysis
  - Chapter 5: cross-validation, bootstrap
  - Chapter 6: stepwise selection, ridge regression, principal components regression, partial least squares, lasso
- Chapter 7-: non-linear methods
  - Chapter 7: non-linear methods for a single-input variable, non-linear additive models for more than one input
  - Chapter 8: tree-based methods (bagging, boosting, random forests)
  - Chapter 9: support vector machines
  - Chapter 10: input variables but no output variables (principal component analysis, K-means clustering, hierarchical clustering)
