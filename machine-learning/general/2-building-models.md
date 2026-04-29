






**Regularization**: a method to avoid complexity issues.

What complexity issues?
- **Bias**:
  - error from oversimplifications
  - model is too simple and _makes strong assumptions, leading to underfitting_
  - poor performance on both training and test data
- **Variance**
  - error from sensitivity to training data fluctuations
  - model is too complex and thus _too sensitive to small changes in training data_
  - good training performance but poor test performance
- **Total Error = Bias² + Variance + Irreducible Error**








High Cardinality problems:
- group by frequency
- target encoding
- dimensionality reduction
- embedding techniques
- geographic clustering


Outliers problems:
- Eliminating them (this could be bad);
- Treating as separate segment if sufficient data exists
- Log transformation
- Winsorizing (cap at 95th percentile)


Missing data:
- Consider if data is missing systematically or at random?
- Mean imputation
- Multiple imputation
- Regression imputation using other features
- KNN imputation


Imbalanced data:
- Oversampling
- Undersampling
- Add synthetic data (SMOTE)
