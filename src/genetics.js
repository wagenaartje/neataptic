/*******************************************************************************************
                                        GENETICS
*******************************************************************************************/

Mutate = {};
Mutate.SWAP_WEIGHT = "SWAP_WEIGHT";
Mutate.SWAP_BIAS = "SWAP_BIAS";
Mutate.MODIFY_RANDOM_WEIGHT = "MODIFY_RANDOM_WEIGHT";
Mutate.MODIFY_RANDOM_BIAS = "MODIFY_RANDOM_BIAS";

// For now, parents for crossover should be the same size!
Crossover = {};
Crossover.SINGLE_POINT = [0.4];
Crossover.TWO_POINT = [0.4, 0.9];
Crossover.UNIFORM = "UNIFORM";
Crossover.AVERAGE = "AVERAGE";

Selection = {};
Selection.FITNESS_PROPORTIONATE = function(r){ return Math.pow(r,2); }
