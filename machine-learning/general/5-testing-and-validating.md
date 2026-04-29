# ML / General / Testing and Validating

**Training set**: data used to train the model.
**Test set**: data used to verify the model created using the training set.
- the error rate on these new cases is called the **generalization error** (or **out of sample error**)

When to use a **Holdout Validation Set** (ie. a second test set):
- when you ran a hyperparameter search and used the test set to pick the best model => your model is now "adapted" to the test set.
- so you:
  1. hold out some "validation" data
  2. train the model using the remaining training/test data
  3. pick a few candidate models
  4. test on hold out set
  5. pick the best model
  6. re-train the model on the full set (training + validation set)
  7. evaluate this model on the test set to get _final_ generalization error
- if not enough data, use **cross-validation**, where you keep swapping and using many small validation sets (you pay for it because your training time is now "k-validation sets")

