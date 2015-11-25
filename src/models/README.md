## Models

Models are simple entities that carry data between layers, by convention they implement the following structure:

```
class MyModel {
  constructor(properties) {
    /* load the model with properties */
  }

  toRow() {
    /* export all properties, including default values for non populated properties */
  }

  toSparseRow() {
    /* export only populated properties */
  }

  static fromRow(row) {
    /* factory method for creating an instance of the model from a row */
  }

  static fromRows(rows) {
    /* factory method for creating an array of instances of the model from an array of row */
  }
}
```
