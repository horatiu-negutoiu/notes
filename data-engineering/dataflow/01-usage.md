# Dataflow / Usage

Before GroupByKey, There is a better way of grouping rather then grouping by a dummy key:
beam.Combine(beam.transforms.combiners.ToListCombineFunction())
This is dangerous because it forces all the records onto a single node so if the input is too large this will run very slowly and potentially fail.
The solution we arrived at is to instead use:
beam.Combine(beam.transforms.combiners.Sample(n=10000))
Where basically we're just setting a maximum number of errors that we care to look at since if there are that many errors there is a systemic issue but it's plenty for us to diagnose the situation
