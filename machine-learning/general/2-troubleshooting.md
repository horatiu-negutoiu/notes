

# ValueError: Expected 2D array, got 1D array instead

Reshape your data either using array.reshape(-1, 1) if your data has a single feature or array.reshape(1, -1) if it contains a single sample.