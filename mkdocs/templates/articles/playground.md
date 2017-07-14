description: Play around with neural-networks built with Neataptic
authors: Thomas Wagenaar
keywords: mutate, neural-network, machine-learning, playground, Neataptic

<div class="col-md-4">
  <div class="btn-group btn-group-justified">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.SUB_NODE)">&zwnj;<span class="glyphicon glyphicon-minus"></button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default">Node</button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.ADD_NODE)">&zwnj;<span class="glyphicon glyphicon-plus"></button>
    </div>
  </div>
  <div class="btn-group btn-group-justified">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.SUB_CONN)">&zwnj;<span class="glyphicon glyphicon-minus"></button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default">Conn</button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.ADD_CONN)">&zwnj;<span class="glyphicon glyphicon-plus"></button>
    </div>
  </div>
  <div class="btn-group btn-group-justified">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.SUB_GATE)">&zwnj;<span class="glyphicon glyphicon-minus"></button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default">Gate</button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.ADD_GATE)">&zwnj;<span class="glyphicon glyphicon-plus"></button>
    </div>
  </div>
  <div class="btn-group btn-group-justified">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.SUB_SELF_CONN)">&zwnj;<span class="glyphicon glyphicon-minus"></button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default">Self-conn</button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.ADD_SELF_CONN)">&zwnj;<span class="glyphicon glyphicon-plus"></button>
    </div>
  </div>
  <div class="btn-group btn-group-justified">
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.SUB_BACK_CONN)">&zwnj;<span class="glyphicon glyphicon-minus"></button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default">Back-conn</button>
    </div>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-default" onclick="mutate(methods.mutation.ADD_BACK_CONN)">&zwnj;<span class="glyphicon glyphicon-plus"></button>
    </div>
  </div>
  <div class="input-group" style="margin-bottom: 15px;">
    <span class="input-group-addon">input1</span>
    <input type="number" class="form-control input1" value=0>
  </div>
  <div class="input-group" style="margin-bottom: 15px;">
    <span class="input-group-addon">input2</span>
    <input type="number" class="form-control input2" value=1>
  </div>
  <div class="btn-group btn-group-justified">
    <div class="btn-group" role="group">
      <button class="btn btn-warning" onclick="activate()">Activate</button>
    </div>
  </div>
  <pre>Output: <span class="output"></span></pre>

</div>
<div class="col-md-8">
  <div class="panel panel-default">
    <svg class="draw" width="100%" height="60%"/>
  </div>

</div>
