# ML General / Classification Metrics

Classification Problem Statement
- two ways to solve a classification problem
  - 1: Class Labels
    - ex: A or B? by default, 0.5 (which is called p value, threshold value) is used to select between A or B. 
  - 2: Probabilities

Consider:
- size of dataset of values in a classification problem:
  - ex: 500Y/500N, or 700Y/300N
  - Is it a balanced dataset?
    - Y: We can use Accuracy.
    - N: Use Recall, Precision or F Beta

Consider:
- when we have classification problems, we need to understand a Confusion Matrix:

```
|        | Actual 1                    | Actual 0                                    |
|--------|-----------------------------|---------------------------------------------|
| Pred 1 | True Positive (TP)          | FP (Type 1 Error)                           |
|        |                             | False Positive Read (FPR)                   |
|--------|-----------------------------|---------------------------------------------|
| Pred 0 | FN (Type 2 Error)           | True Negative (TN)                          |
|        | False Negative Read (FNR)   |                                             |
|--------|-----------------------------|---------------------------------------------|
```

Our aim, in classification problems, is to **reduce our Type 1 and 2 errors**.

$$
Accuracy = \frac{TP + TN}{TP + TN + FP + FN}
$$

Due to the way this calculation is done, an imbalanced dataset may have very high (misleading) accuracies.
Ex: Dataset has mostly class A values, very few class B values. Dataset is trained and when tested, it guesses all values to be class A. That will give an accuracy of over, say, 90%. But this is misleading, because the model is actually 'blind' to class B.
As a result, **Recall (aka. True Positive Rate (TPR), aka. Sensitivity) and Precision (aka. Positive Prediction Value (PPV))** should be used.

$$
Recall = \frac{TP}{TP + FN}
$$

Explanation: Out of the total "actual positive" values, how many did we predict positive?

$$
Precision = \frac{TP}{TP + FP}
$$

Explanation: Out of the total "actual positive" results, how many were _actually_ positive?

Good example for imbalanced classification problem: Spam Prediction
Here the aim is to reduce False Positive (FP) value.

Another example of imbalanced classification problem: Cancer detection.
Here the aim is to reduce False Negative (FN) value.

Conclusion: use the appropriate metric considering the application.

**Reminder**
$\beta$ refers to the probability of *Type II error** in a statistical hypothesis test.

In some imbalanced dataset problems, both Recall and Precision are important. In these cases, use F Beta score.

$$
F_B = (1 + \beta^2) * \frac{Precision * Recall}{\beta^2 * (Precision + Recall)}
$$

When $\beta$ is 1, we get something called a **harmonic mean**, also known as the **F-Score**:

$$
(1 + 1^2) * \frac{P * R}{1^2 * (P + R)} = \frac{2PR}{P+R}
$$


