Search.setIndex({docnames:["actions/index","bibliography/index","configuration","dynamics/index","dynamics/road/lane","dynamics/road/regulation","dynamics/road/road","dynamics/vehicle/behavior","dynamics/vehicle/controller","dynamics/vehicle/kinematics","environments/highway","environments/index","environments/intersection","environments/merge","environments/parking","environments/roundabout","graphics/index","index","installation","make_your_own","observations/index","quickstart","rewards/index","user_guide"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["actions/index.rst","bibliography/index.rst","configuration.rst","dynamics/index.rst","dynamics/road/lane.rst","dynamics/road/regulation.rst","dynamics/road/road.rst","dynamics/vehicle/behavior.rst","dynamics/vehicle/controller.rst","dynamics/vehicle/kinematics.rst","environments/highway.rst","environments/index.rst","environments/intersection.rst","environments/merge.rst","environments/parking.rst","environments/roundabout.rst","graphics/index.rst","index.rst","installation.rst","make_your_own.rst","observations/index.rst","quickstart.rst","rewards/index.rst","user_guide.rst"],objects:{"highway_env.envs.common":{"abstract":[19,0,0,"-"],action:[0,0,0,"-"],graphics:[16,0,0,"-"],observation:[20,0,0,"-"]},"highway_env.envs.common.abstract":{AbstractEnv:[19,1,1,""]},"highway_env.envs.common.abstract.AbstractEnv":{PERCEPTION_DISTANCE:[19,2,1,""],__annotations__:[19,2,1,""],__deepcopy__:[19,3,1,""],__init__:[19,3,1,""],__module__:[19,2,1,""],_automatic_rendering:[19,3,1,""],_cost:[19,3,1,""],_is_terminal:[19,3,1,""],_reward:[19,3,1,""],_simulate:[19,3,1,""],action_type:[19,2,1,""],automatic_rendering_callback:[19,2,1,""],call_vehicle_method:[19,3,1,""],change_vehicles:[19,3,1,""],close:[19,3,1,""],configure:[19,3,1,""],default_config:[19,3,1,""],define_spaces:[19,3,1,""],get_available_actions:[19,3,1,""],metadata:[19,2,1,""],observation_type:[19,2,1,""],randomize_behaviour:[19,3,1,""],render:[19,3,1,""],reset:[19,3,1,""],seed:[19,3,1,""],set_preferred_lane:[19,3,1,""],set_route_at_intersection:[19,3,1,""],set_vehicle_field:[19,3,1,""],simplify:[19,3,1,""],step:[19,3,1,""],to_finite_mdp:[19,3,1,""]},"highway_env.envs.common.action":{ActionType:[0,1,1,""],ContinuousAction:[0,1,1,""],DiscreteMetaAction:[0,1,1,""],action_factory:[0,4,1,""]},"highway_env.envs.common.action.ActionType":{__dict__:[0,2,1,""],__module__:[0,2,1,""],__weakref__:[0,2,1,""],act:[0,3,1,""],space:[0,3,1,""],vehicle_class:[0,3,1,""]},"highway_env.envs.common.action.ContinuousAction":{ACCELERATION_RANGE:[0,2,1,""],STEERING_RANGE:[0,2,1,""],__init__:[0,3,1,""],__module__:[0,2,1,""],act:[0,3,1,""],space:[0,3,1,""],vehicle_class:[0,3,1,""]},"highway_env.envs.common.action.DiscreteMetaAction":{ACTIONS_ALL:[0,2,1,""],ACTIONS_LAT:[0,2,1,""],ACTIONS_LONGI:[0,2,1,""],__init__:[0,3,1,""],__module__:[0,2,1,""],act:[0,3,1,""],space:[0,3,1,""],vehicle_class:[0,3,1,""]},"highway_env.envs.common.graphics":{EnvViewer:[16,1,1,""],EventHandler:[16,1,1,""]},"highway_env.envs.common.graphics.EnvViewer":{SAVE_IMAGES:[16,2,1,""],__dict__:[16,2,1,""],__init__:[16,3,1,""],__module__:[16,2,1,""],__weakref__:[16,2,1,""],close:[16,3,1,""],display:[16,3,1,""],get_image:[16,3,1,""],handle_events:[16,3,1,""],set_agent_action_sequence:[16,3,1,""],set_agent_display:[16,3,1,""],window_position:[16,3,1,""]},"highway_env.envs.common.graphics.EventHandler":{__dict__:[16,2,1,""],__module__:[16,2,1,""],__weakref__:[16,2,1,""],handle_continuous_action_event:[16,3,1,""],handle_discrete_action_event:[16,3,1,""],handle_event:[16,3,1,""]},"highway_env.envs.common.observation":{AttributesObservation:[20,1,1,""],GrayscaleObservation:[20,1,1,""],KinematicObservation:[20,1,1,""],KinematicsGoalObservation:[20,1,1,""],ObservationType:[20,1,1,""],OccupancyGridObservation:[20,1,1,""],TimeToCollisionObservation:[20,1,1,""],observation_factory:[20,4,1,""]},"highway_env.envs.common.observation.AttributesObservation":{__init__:[20,3,1,""],__module__:[20,2,1,""],observe:[20,3,1,""],space:[20,3,1,""]},"highway_env.envs.common.observation.GrayscaleObservation":{__init__:[20,3,1,""],__module__:[20,2,1,""],_record_to_grayscale:[20,3,1,""],observe:[20,3,1,""],space:[20,3,1,""]},"highway_env.envs.common.observation.KinematicObservation":{FEATURES:[20,2,1,""],__annotations__:[20,2,1,""],__init__:[20,3,1,""],__module__:[20,2,1,""],normalize_obs:[20,3,1,""],observe:[20,3,1,""],space:[20,3,1,""]},"highway_env.envs.common.observation.KinematicsGoalObservation":{__init__:[20,3,1,""],__module__:[20,2,1,""],observe:[20,3,1,""],space:[20,3,1,""]},"highway_env.envs.common.observation.ObservationType":{__dict__:[20,2,1,""],__module__:[20,2,1,""],__weakref__:[20,2,1,""],observe:[20,3,1,""],space:[20,3,1,""]},"highway_env.envs.common.observation.OccupancyGridObservation":{FEATURES:[20,2,1,""],GRID_SIZE:[20,2,1,""],GRID_STEP:[20,2,1,""],__annotations__:[20,2,1,""],__init__:[20,3,1,""],__module__:[20,2,1,""],normalize:[20,3,1,""],observe:[20,3,1,""],space:[20,3,1,""]},"highway_env.envs.common.observation.TimeToCollisionObservation":{__init__:[20,3,1,""],__module__:[20,2,1,""],observe:[20,3,1,""],space:[20,3,1,""]},"highway_env.envs.highway_env":{HighwayEnv:[10,1,1,""]},"highway_env.envs.highway_env.HighwayEnv":{HIGH_SPEED_REWARD:[10,2,1,""],LANE_CHANGE_REWARD:[10,2,1,""],RIGHT_LANE_REWARD:[10,2,1,""],__annotations__:[10,2,1,""],__module__:[10,2,1,""],_cost:[10,3,1,""],_create_road:[10,3,1,""],_create_vehicles:[10,3,1,""],_is_terminal:[10,3,1,""],_reward:[10,3,1,""],default_config:[10,3,1,""],reset:[10,3,1,""],step:[10,3,1,""]},"highway_env.envs.intersection_env":{IntersectionEnv:[12,1,1,""]},"highway_env.envs.intersection_env.IntersectionEnv":{ACTIONS:[12,2,1,""],ACTIONS_INDEXES:[12,2,1,""],ARRIVED_REWARD:[12,2,1,""],COLLISION_REWARD:[12,2,1,""],HIGH_SPEED_REWARD:[12,2,1,""],__annotations__:[12,2,1,""],__module__:[12,2,1,""],_clear_vehicles:[12,3,1,""],_cost:[12,3,1,""],_is_terminal:[12,3,1,""],_make_road:[12,3,1,""],_make_vehicles:[12,3,1,""],_reward:[12,3,1,""],_spawn_vehicle:[12,3,1,""],default_config:[12,3,1,""],has_arrived:[12,3,1,""],reset:[12,3,1,""],step:[12,3,1,""]},"highway_env.envs.merge_env":{MergeEnv:[13,1,1,""]},"highway_env.envs.merge_env.MergeEnv":{COLLISION_REWARD:[13,2,1,""],HIGH_SPEED_REWARD:[13,2,1,""],LANE_CHANGE_REWARD:[13,2,1,""],MERGING_SPEED_REWARD:[13,2,1,""],RIGHT_LANE_REWARD:[13,2,1,""],__annotations__:[13,2,1,""],__module__:[13,2,1,""],_is_terminal:[13,3,1,""],_make_road:[13,3,1,""],_make_vehicles:[13,3,1,""],_reward:[13,3,1,""],default_config:[13,3,1,""],reset:[13,3,1,""]},"highway_env.envs.parking_env":{ParkingEnv:[14,1,1,""]},"highway_env.envs.parking_env.ParkingEnv":{REWARD_WEIGHTS:[14,2,1,""],STEERING_RANGE:[14,2,1,""],SUCCESS_GOAL_REWARD:[14,2,1,""],__annotations__:[14,2,1,""],__module__:[14,2,1,""],_create_road:[14,3,1,""],_create_vehicles:[14,3,1,""],_is_success:[14,3,1,""],_is_terminal:[14,3,1,""],_reward:[14,3,1,""],compute_reward:[14,3,1,""],default_config:[14,3,1,""],reset:[14,3,1,""],step:[14,3,1,""]},"highway_env.envs.roundabout_env":{RoundaboutEnv:[15,1,1,""]},"highway_env.envs.roundabout_env.RoundaboutEnv":{COLLISION_REWARD:[15,2,1,""],HIGH_SPEED_REWARD:[15,2,1,""],LANE_CHANGE_REWARD:[15,2,1,""],RIGHT_LANE_REWARD:[15,2,1,""],__annotations__:[15,2,1,""],__module__:[15,2,1,""],_is_terminal:[15,3,1,""],_make_road:[15,3,1,""],_make_vehicles:[15,3,1,""],_reward:[15,3,1,""],default_config:[15,3,1,""],reset:[15,3,1,""],step:[15,3,1,""]},"highway_env.road":{graphics:[16,0,0,"-"],lane:[4,0,0,"-"],regulation:[5,0,0,"-"],road:[6,0,0,"-"]},"highway_env.road.graphics":{LaneGraphics:[16,1,1,""],RoadGraphics:[16,1,1,""],RoadObjectGraphics:[16,1,1,""],WorldSurface:[16,1,1,""]},"highway_env.road.graphics.LaneGraphics":{STRIPE_LENGTH:[16,2,1,""],STRIPE_SPACING:[16,2,1,""],STRIPE_WIDTH:[16,2,1,""],__annotations__:[16,2,1,""],__dict__:[16,2,1,""],__module__:[16,2,1,""],__weakref__:[16,2,1,""],continuous_curve:[16,3,1,""],continuous_line:[16,3,1,""],display:[16,3,1,""],draw_ground:[16,3,1,""],draw_stripes:[16,3,1,""],striped_line:[16,3,1,""]},"highway_env.road.graphics.RoadGraphics":{__dict__:[16,2,1,""],__module__:[16,2,1,""],__weakref__:[16,2,1,""],display:[16,3,1,""],display_road_objects:[16,3,1,""],display_traffic:[16,3,1,""]},"highway_env.road.graphics.RoadObjectGraphics":{BLACK:[16,2,1,""],BLUE:[16,2,1,""],DEFAULT_COLOR:[16,2,1,""],GREEN:[16,2,1,""],RED:[16,2,1,""],YELLOW:[16,2,1,""],__dict__:[16,2,1,""],__module__:[16,2,1,""],__weakref__:[16,2,1,""],blit_rotate:[16,3,1,""],display:[16,3,1,""],get_color:[16,3,1,""]},"highway_env.road.graphics.WorldSurface":{BLACK:[16,2,1,""],GREEN:[16,2,1,""],GREY:[16,2,1,""],INITIAL_CENTERING:[16,2,1,""],INITIAL_SCALING:[16,2,1,""],MOVING_FACTOR:[16,2,1,""],SCALING_FACTOR:[16,2,1,""],WHITE:[16,2,1,""],YELLOW:[16,2,1,""],__dict__:[16,2,1,""],__init__:[16,3,1,""],__module__:[16,2,1,""],handle_event:[16,3,1,""],move_display_window_to:[16,3,1,""],pix:[16,3,1,""],pos2pix:[16,3,1,""],vec2pix:[16,3,1,""]},"highway_env.road.lane":{AbstractLane:[4,1,1,""],CircularLane:[4,1,1,""],LineType:[4,1,1,""],SineLane:[4,1,1,""],StraightLane:[4,1,1,""]},"highway_env.road.lane.AbstractLane":{DEFAULT_WIDTH:[4,2,1,""],VEHICLE_LENGTH:[4,2,1,""],__annotations__:[4,2,1,""],__dict__:[4,2,1,""],__module__:[4,2,1,""],__weakref__:[4,2,1,""],after_end:[4,3,1,""],distance:[4,3,1,""],heading_at:[4,3,1,""],is_reachable_from:[4,3,1,""],length:[4,2,1,""],line_types:[4,2,1,""],local_coordinates:[4,3,1,""],metaclass__:[4,2,1,""],on_lane:[4,3,1,""],position:[4,3,1,""],width_at:[4,3,1,""]},"highway_env.road.lane.CircularLane":{__init__:[4,3,1,""],__module__:[4,2,1,""],heading_at:[4,3,1,""],line_types:[4,2,1,""],local_coordinates:[4,3,1,""],position:[4,3,1,""],width_at:[4,3,1,""]},"highway_env.road.lane.LineType":{CONTINUOUS:[4,2,1,""],CONTINUOUS_LINE:[4,2,1,""],NONE:[4,2,1,""],STRIPED:[4,2,1,""],__dict__:[4,2,1,""],__module__:[4,2,1,""],__weakref__:[4,2,1,""]},"highway_env.road.lane.SineLane":{__init__:[4,3,1,""],__module__:[4,2,1,""],heading_at:[4,3,1,""],line_types:[4,2,1,""],local_coordinates:[4,3,1,""],position:[4,3,1,""]},"highway_env.road.lane.StraightLane":{__init__:[4,3,1,""],__module__:[4,2,1,""],heading_at:[4,3,1,""],line_types:[4,2,1,""],local_coordinates:[4,3,1,""],position:[4,3,1,""],width_at:[4,3,1,""]},"highway_env.road.regulation":{RegulatedRoad:[5,1,1,""]},"highway_env.road.regulation.RegulatedRoad":{REGULATION_FREQUENCY:[5,2,1,""],YIELDING_COLOR:[5,2,1,""],YIELD_DURATION:[5,2,1,""],__annotations__:[5,2,1,""],__init__:[5,3,1,""],__module__:[5,2,1,""],enforce_road_rules:[5,3,1,""],is_conflict_possible:[5,3,1,""],respect_priorities:[5,3,1,""],step:[5,3,1,""]},"highway_env.road.road":{Road:[6,1,1,""],RoadNetwork:[6,1,1,""]},"highway_env.road.road.Road":{__init__:[6,3,1,""],__module__:[6,2,1,""],__repr__:[6,3,1,""],act:[6,3,1,""],close_vehicles_to:[6,3,1,""],dump:[6,3,1,""],get_log:[6,3,1,""],neighbour_vehicles:[6,3,1,""],step:[6,3,1,""]},"highway_env.road.road.RoadNetwork":{__annotations__:[6,2,1,""],__dict__:[6,2,1,""],__init__:[6,3,1,""],__module__:[6,2,1,""],__weakref__:[6,2,1,""],add_lane:[6,3,1,""],all_side_lanes:[6,3,1,""],bfs_paths:[6,3,1,""],get_closest_lane_index:[6,3,1,""],get_lane:[6,3,1,""],graph:[6,2,1,""],is_connected_road:[6,3,1,""],is_leading_to_road:[6,3,1,""],is_same_road:[6,3,1,""],lanes_list:[6,3,1,""],next_lane:[6,3,1,""],position_heading_along_route:[6,3,1,""],shortest_path:[6,3,1,""],side_lanes:[6,3,1,""],straight_road_network:[6,3,1,""]},"highway_env.vehicle":{behavior:[7,0,0,"-"],controller:[8,0,0,"-"],graphics:[16,0,0,"-"],kinematics:[9,0,0,"-"]},"highway_env.vehicle.behavior":{AggressiveVehicle:[7,1,1,""],DefensiveVehicle:[7,1,1,""],IDMVehicle:[7,1,1,""],LinearVehicle:[7,1,1,""]},"highway_env.vehicle.behavior.AggressiveVehicle":{ACCELERATION_PARAMETERS:[7,2,1,""],LANE_CHANGE_MIN_ACC_GAIN:[7,2,1,""],MERGE_ACC_GAIN:[7,2,1,""],MERGE_TARGET_VEL:[7,2,1,""],MERGE_VEL_RATIO:[7,2,1,""],__module__:[7,2,1,""],target_speed:[7,2,1,""]},"highway_env.vehicle.behavior.DefensiveVehicle":{ACCELERATION_PARAMETERS:[7,2,1,""],LANE_CHANGE_MIN_ACC_GAIN:[7,2,1,""],MERGE_ACC_GAIN:[7,2,1,""],MERGE_TARGET_VEL:[7,2,1,""],MERGE_VEL_RATIO:[7,2,1,""],__module__:[7,2,1,""],target_speed:[7,2,1,""]},"highway_env.vehicle.behavior.IDMVehicle":{ACC_MAX:[7,2,1,""],COMFORT_ACC_MAX:[7,2,1,""],COMFORT_ACC_MIN:[7,2,1,""],DELTA:[7,2,1,""],DISTANCE_WANTED:[7,2,1,""],LANE_CHANGE_DELAY:[7,2,1,""],LANE_CHANGE_MAX_BRAKING_IMPOSED:[7,2,1,""],LANE_CHANGE_MIN_ACC_GAIN:[7,2,1,""],POLITENESS:[7,2,1,""],TIME_WANTED:[7,2,1,""],__init__:[7,3,1,""],__module__:[7,2,1,""],acceleration:[7,3,1,""],act:[7,3,1,""],change_lane_policy:[7,3,1,""],create_from:[7,3,1,""],desired_gap:[7,3,1,""],maximum_speed:[7,3,1,""],mobil:[7,3,1,""],randomize_behavior:[7,3,1,""],recover_from_stop:[7,3,1,""],step:[7,3,1,""],target_speed:[7,2,1,""]},"highway_env.vehicle.behavior.LinearVehicle":{ACCELERATION_PARAMETERS:[7,2,1,""],ACCELERATION_RANGE:[7,2,1,""],STEERING_PARAMETERS:[7,2,1,""],STEERING_RANGE:[7,2,1,""],TIME_WANTED:[7,2,1,""],__init__:[7,3,1,""],__module__:[7,2,1,""],acceleration:[7,3,1,""],acceleration_features:[7,3,1,""],act:[7,3,1,""],add_features:[7,3,1,""],collect_data:[7,3,1,""],lateral_structure:[7,3,1,""],longitudinal_structure:[7,3,1,""],randomize_behavior:[7,3,1,""],steering_control:[7,3,1,""],steering_features:[7,3,1,""],target_speed:[7,2,1,""]},"highway_env.vehicle.controller":{ControlledVehicle:[8,1,1,""],MDPVehicle:[8,1,1,""]},"highway_env.vehicle.controller.ControlledVehicle":{DELTA_SPEED:[8,2,1,""],KP_A:[8,2,1,""],KP_HEADING:[8,2,1,""],KP_LATERAL:[8,2,1,""],MAX_STEERING_ANGLE:[8,2,1,""],PURSUIT_TAU:[8,2,1,""],TAU_A:[8,2,1,""],TAU_DS:[8,2,1,""],__annotations__:[8,2,1,""],__init__:[8,3,1,""],__module__:[8,2,1,""],act:[8,3,1,""],create_from:[8,3,1,""],follow_road:[8,3,1,""],get_routes_at_intersection:[8,3,1,""],plan_route_to:[8,3,1,""],predict_trajectory_constant_speed:[8,3,1,""],set_route_at_intersection:[8,3,1,""],speed_control:[8,3,1,""],steering_control:[8,3,1,""],target_speed:[8,2,1,""]},"highway_env.vehicle.controller.MDPVehicle":{SPEED_COUNT:[8,2,1,""],SPEED_MAX:[8,2,1,""],SPEED_MIN:[8,2,1,""],__annotations__:[8,2,1,""],__init__:[8,3,1,""],__module__:[8,2,1,""],act:[8,3,1,""],index_to_speed:[8,3,1,""],predict_trajectory:[8,3,1,""],speed_to_index:[8,3,1,""]},"highway_env.vehicle.graphics":{VehicleGraphics:[16,1,1,""]},"highway_env.vehicle.graphics.VehicleGraphics":{BLACK:[16,2,1,""],BLUE:[16,2,1,""],DEFAULT_COLOR:[16,2,1,""],EGO_COLOR:[16,2,1,""],GREEN:[16,2,1,""],PURPLE:[16,2,1,""],RED:[16,2,1,""],YELLOW:[16,2,1,""],__dict__:[16,2,1,""],__module__:[16,2,1,""],__weakref__:[16,2,1,""],blit_rotate:[16,3,1,""],display:[16,3,1,""],display_history:[16,3,1,""],display_trajectory:[16,3,1,""],get_color:[16,3,1,""]},"highway_env.vehicle.kinematics":{Vehicle:[9,1,1,""]},"highway_env.vehicle.kinematics.Vehicle":{COLLISIONS_ENABLED:[9,2,1,""],DEFAULT_SPEEDS:[9,2,1,""],LENGTH:[9,2,1,""],MAX_SPEED:[9,2,1,""],WIDTH:[9,2,1,""],__init__:[9,3,1,""],__module__:[9,2,1,""],__repr__:[9,3,1,""],__str__:[9,3,1,""],_is_colliding:[9,3,1,""],act:[9,3,1,""],check_collision:[9,3,1,""],clip_actions:[9,3,1,""],create_from:[9,3,1,""],create_random:[9,3,1,""],destination:[9,3,1,""],destination_direction:[9,3,1,""],direction:[9,3,1,""],dump:[9,3,1,""],front_distance_to:[9,3,1,""],get_log:[9,3,1,""],lane_distance_to:[9,3,1,""],make_on_lane:[9,3,1,""],on_road:[9,3,1,""],on_state_update:[9,3,1,""],step:[9,3,1,""],to_dict:[9,3,1,""],velocity:[9,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function"},terms:{"1e6":21,"1st":9,"25m":20,"2e5":21,"abstract":[4,19],"case":[5,6,20],"class":[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20],"default":[0,7,8,9,16,19,20],"float":[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20],"function":[0,4,6,16,19,20],"import":[0,3,20,21],"int":[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20,21],"new":[4,5,6,7,8,9,10,14,19],"return":[0,4,5,6,7,8,9,10,12,13,14,15,16,19],"static":[5,6,16],"switch":8,"true":[0,4,6,7,9,10,12,13,14,15,19,20],"try":[5,7,17],"while":[0,9,10,13,15,19,21],But:[12,13],For:[0,6,7,20],Its:16,The:[0,1,2,3,4,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21],Then:0,There:3,These:[9,20],Use:[14,20,21],Using:[8,20],Will:19,__annotations__:[4,5,6,8,10,12,13,14,15,16,19,20],__deepcopy__:19,__dict__:[0,4,6,16,20],__doc__:[0,4,6,16,20],__init__:[0,4,5,6,7,8,9,16,19,20],__module__:[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20],__repr__:[6,9],__str__:9,__weakref__:[0,4,6,16,20],_automatic_rend:19,_clear_vehicl:12,_cost:[10,12,19],_create_road:[10,14],_create_vehicl:[10,14],_from:6,_is_collid:9,_is_success:14,_is_termin:[10,12,13,14,15,19],_make_road:[12,13,15],_make_vehicl:[12,13,15],_record_to_grayscal:20,_reward:[10,12,13,14,15,19],_simul:19,_spawn_vehicl:12,_to:[6,8,19],a_c:7,a_n:7,a_o:7,abbeel:1,abc:4,abcmeta:4,abl:0,about:7,absolut:[6,12,20],abstractenv:[0,16,19,20],abstractlan:[4,6,9,16],acc_max:7,acceler:[0,7,8,9,14],acceleration_featur:7,acceleration_paramet:7,acceleration_rang:[0,7],access:[0,12,13,15,19],accident:19,accord:7,accur:[4,6,7,8,9,16,19,20],achiev:[12,14],achieved_go:14,act:[0,6,7,8,9],action:[2,6,7,8,9,10,12,13,14,15,16,17,19,21,23],action_dur:8,action_factori:0,action_typ:[16,19,21],actions_al:0,actions_index:12,actions_lat:0,actions_longi:0,actiontyp:[0,16,19],actual:[0,6],add:[0,10,14],add_featur:7,add_lan:6,added:12,addit:13,adjac:[10,14],advanc:1,affect:3,after:[2,6,7],after_end:4,agent:[0,10,12,13,14,16,17,19],agent_displai:16,aggressivevehicl:7,agre:12,alex:1,alia:4,all:[6,7,10,12,14,15,17,19,20],all_side_lan:6,allow:[0,7,8,19],along:[6,8,9,16,20],also:[6,10,13,16,20],altch:1,altern:19,altruist:13,alwai:[0,16,20],among:8,amplitud:4,anaconda:18,andr:1,andrychowicz:1,angl:[0,6,7,8,9,16],ani:[6,12,13,14,19,20],anoth:[6,9],ansgar:1,anticip:8,api:23,appear:9,appli:[0,8],approach:[13,15],appropri:14,approxim:7,apt:18,arbitr:5,arc:4,arcsin:8,area:16,aren:19,arg:19,arn:1,around:[4,20],arrai:[7,14,16,20],arrived_reward:12,arrow:0,artifici:21,arxiv:1,assign:5,associ:[12,14,15,19],assum:[7,20],attribut:[0,4,5,6,16,20],attributesobserv:20,author:17,automat:[0,8,15,19],automatic_rendering_callback:19,autonom:[1,17],avail:[0,6,19,21],avoid:[7,10,12,13,15,20],awr:[1,21],axi:20,base:[0,5,7,9,21],baselin:21,batch_siz:21,becaus:7,been:[12,13,15,19],befor:7,behav:[3,5],behavior:[3,5,10,12,13,15,19],behaviour:[5,6,7,10,12,14,15,16,19],behind:[9,20],being:[7,9],belong:6,below:20,beta:9,between:[4,5,7,8,9,16,19],beyond:0,bfs_path:6,bibliographi:17,bibtex:17,bicycl:[1,9],bigint:19,bin:20,black:16,blit_rot:16,block:12,blue:16,bob:1,bolt:17,bool:[0,4,5,6,7,9,10,12,13,14,15,16,19,20],both:[0,4,7],boundari:19,box:0,brake:[7,9],breadth:6,brigitt:1,budget:19,buffer_s:21,calcul:9,call:[8,10,12,13,14,15,16,19,20],call_vehicle_method:19,callabl:[16,19],callback:[16,19],can:[0,2,6,7,8,10,12,13,14,15,16,17,19,20,21],candid:7,captur:19,car:1,cascad:8,cast:9,cell:20,center:[4,7,8,9,16],centering_posit:[10,12,13,14,15,16],central:[4,12],chang:[0,1,2,4,7,8,10,15,19,20],change_lane_polici:7,change_vehicl:19,channel:20,check:[9,19],check_collis:9,choos:8,chosen:[7,9,16],circl:4,circularlan:4,classmethod:[7,8,9,12,13,14,15,16,19],clip:[0,20],clip_act:9,clockwis:4,close:[7,16,19],close_vehicles_to:6,closest:[6,8],code:12,coeffici:7,colab:17,collect:[7,17,20],collect_data:7,collid:10,collis:[5,6,7,9,10,12,13,15,23],collision_reward:[10,12,13,15],collisions_en:9,color:16,com:[16,17,18],combin:8,come:[0,12,20],comfort_acc_max:7,comfort_acc_min:7,command:[7,8,9],common:[0,16,19,20],compar:6,complet:9,compos:[3,6,10,13,14],comput:[1,4,7,8,9,19],compute_reward:14,concaten:6,condit:[14,21],config:[0,2,10,12,13,14,15,19,20],configur:[0,16,17,19,23],conflict:5,congest:1,connect:6,consid:[6,17,20],consist:[0,1],constant:[8,19,20],constraint:[12,19],contain:[6,9,19,20],continu:[4,14,16,23],continuous_curv:16,continuous_lin:[4,16],continuousact:[0,14,16],contribut:[12,17],control:[3,5,7,14,15,16,19,23],controlledvehicl:[5,7,8],convers:[4,20],convert:[4,8,16],coordin:[4,6,16,20],copi:[7,8,9,19],core:[6,9,20],correl:19,correspond:[0,4,6,8,10,14,16,19,20],cos:9,cos_h:[12,14,20],cost:10,could:12,count:6,cours:12,crash:[9,10,14],creat:[0,7,8,9,10,14,16,19,21],create_from:[7,8,9],create_random:9,creation:2,credit:14,cruis:[0,8],current:[6,8,9,12,14,15,19,20],current_index:6,curv:4,custom:17,customari:20,customis:[0,20],cut:7,d_0:7,data:[6,7,20],datafram:[6,9,20],ddpg:21,deceler:7,decelr:0,decentr:12,decid:[6,7],decis:[7,10,12,14,15,16,17,19],dedic:16,deep:19,default_color:16,default_config:[10,12,13,14,15,19],default_spe:9,default_width:4,defensivevehicl:7,defin:[0,2,4,6,10,12,13,14,15,16,19,20],define_spac:19,definit:0,delai:7,delta:[0,7,8,9],delta_:8,delta_spe:8,demonstr:21,dens:12,densiti:9,depend:[9,18],depth:6,deriv:8,describ:[3,4,5,6,17,20],descript:[3,17,21],desir:[0,7,8,14,20],desired_gap:7,desired_go:14,destin:[6,8,9,12,20],destination_direct:9,detail:17,detect:[9,20],determin:[4,5],determinist:1,dev:18,dict:[0,6,7,8,9,10,12,13,14,15,19,20,21],dictat:7,dictionari:[2,6,20],did:12,differ:[7,20],dimens:16,direct:[0,9],directli:[0,20],dirk:1,disabl:0,discret:[7,8,23],discretemetaact:[0,10,12,13,15,16],discretis:20,displai:[5,6,16,20],display_histori:16,display_road_object:16,display_traff:16,display_trajectori:16,distanc:[4,6,7,9,16,19],distance_w:7,distant:19,doe:7,doesn:[6,7,19],doi:1,done:[16,21],dot:[7,8,9],dqn:20,draw:16,draw_ground:16,draw_strip:16,draw_surfac:16,drawn:16,drive:[5,6,9,10,13,16,17,19,21],driver:7,dump:[6,9],durat:[8,10,12,15,16],dure:[7,16],dynam:[0,2,5,6,7,8,9,10,12,14,15,17,19,23],each:[0,5,6,8,10,12,16,20],east:12,edg:[0,6],edouard:17,ego:[0,7,10,12,13,14,15,16,19],ego_color:16,ego_vehicl:7,either:0,eleur:[17,18],els:[6,8],empir:1,enabl:[0,9],enable_lane_chang:7,encod:[6,20],end:[4,6,8,12,14,15,16,19],end_phas:4,enforc:5,enforce_road_rul:5,enough:7,ensur:[4,19],entiti:[5,6],env:[0,10,12,13,14,15,16,18,19,20,21],environ:[0,3,10,12,13,14,15,16,17,20,23],envview:16,episod:[10,12,13,14,15,21],episode_reward:21,equal:19,equival:0,eras:8,errat:9,evalu:21,even:[7,16],event:16,eventhandl:[0,16],everi:[0,3],exampl:[19,21],except:20,execut:[0,7,10,12,14,15,19],exist:[7,8,9,19],expect:[12,20],experi:[1,21],expon:7,fail:12,fals:[0,4,5,6,10,12,13,14,15,16,20,21],fast:15,faster:[0,12],feasibl:1,featur:[7,12,14],features_rang:[12,20],fewer:20,ffmpeg:18,field:20,figur:12,filip:1,fill:20,find:[5,6,8],fine:12,finish:6,first:[5,6,16,19,20],fix:[19,20],flag:16,flatten:12,florent:1,flow:15,fluid:1,follow:[0,1,6,7,8,15,16,20],follow_road:8,fong:1,forbidden:4,forward:[8,9,16],forwardref:4,foster:10,found:6,four:20,frac:[7,8,9],frame:[4,6,9,19,20],fran:1,free:19,frenet:4,frequenc:[7,16],friction:0,from:[4,6,7,8,9,19,21],front:[7,8,9],front_distance_to:9,front_vehicl:7,full:[0,7,10],futur:[8,16,21],gain:[7,8],gamma:21,gap:7,gather:17,gcc:18,gener:[1,5,6,19],geometri:[4,6],geq:7,get:[4,6,8,17,18,19,20],get_available_act:[0,19],get_closest_lane_index:6,get_color:16,get_imag:16,get_lan:6,get_log:[6,9],get_routes_at_intersect:8,git:18,github:[17,18],give:[5,6,20],given:[4,6,7,8,9,10,12,14,15,16,19],global:4,go_straight:12,goal:[6,14,21],goal_selection_strategi:21,going:[4,6,7],good:12,googl:17,graph:6,graphic:[17,18,23],graviti:9,grayscal:23,grayscaleobserv:20,green:16,grei:16,grid:23,grid_siz:20,grid_step:20,guid:17,gym:[0,10,12,13,14,15,16,20,21],handl:[15,16],handle_continuous_action_ev:16,handle_discrete_action_ev:16,handle_ev:16,handler:8,happen:12,hard:12,has:[4,6,12,13,15,18,19,20],has_arriv:12,have:[6,7,14,19],head:[4,6,7,9,14],heading_at:4,helb:1,help:[4,6,7,8,9,16,19,20],henneck:1,her:21,her_sac_highwai:21,here:21,high:[8,10,13,14],high_speed_reward:[10,12,13,15],higher:7,highwai:[0,11,12,13,15,16,18,20,21],highway_env:[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20,21],highwayenv:10,hindsight:[1,21],histori:16,hm08:[1,21],horizon:[5,20],horizont:12,hot:20,how:[0,3,7,16,21],howev:5,howpublish:17,hren:1,http:[16,17,18],human:19,hyperparam:21,idea:14,ideal:12,identifi:6,idl:[0,12,21],idm:7,idmvehicl:[7,10,13,15,19],ieee:1,illustr:20,imag:[16,19,23],image1:18,implement:[0,4,7,8,10,12,13,14,15,16,19,21],impos:7,incent:7,includ:[0,5,6],incom:13,incoming_vehicle_destin:15,increas:7,index:[0,6,7,8,9],index_to_spe:8,induc:7,inevit:7,info:[10,12,14,15,19,21],inform:[1,14],infrastructur:6,infti:20,initi:[4,6,7,8,9,10,12,13,14,15,16,19,20],initial_cent:16,initial_sc:16,initial_spac:10,initial_vehicle_count:12,inner:12,input:[6,8,9,16],instal:[16,17],instanc:[0,6,20],integ:6,integr:9,intellig:[1,7],interdisciplinari:1,intermedi:19,intern:9,intersect:[0,5,6,8,11,21],intersection_env:12,intersectionenv:12,interv:0,invert:8,involv:19,is_conflict_poss:5,is_connected_road:6,is_leading_to_road:6,is_reachable_from:4,is_same_road:6,is_success:21,its:[0,2,4,6,7,8,9,15],itself:18,jam:7,jean:1,jojo:14,jona:1,josh:1,journal:17,junction:13,k_p:8,keep:12,kei:[0,16,20],kest:1,keyboard:16,kinemat:[0,1,3,5,6,7,8,10,12,16,23],kinematicobserv:20,kinematicsgo:14,kinematicsgoalobserv:20,known:4,kp_a:8,kp_head:8,kp_later:8,kth07:[1,7],kurtosi:14,kwarg:[0,20],lab:6,label:[0,16],landmark:[5,6],lane:[0,1,3,5,6,7,8,9,10,12,13,14,15,16,19,20],lane_change_delai:7,lane_change_max_braking_impos:7,lane_change_min_acc_gain:7,lane_change_reward:[10,13,15],lane_distance_to:9,lane_index:[6,7,9],lane_index_1:6,lane_index_2:6,lane_left:0,lane_right:0,lanegraph:16,laneindex:6,lanes_count:10,lanes_list:6,last:[9,10,12,14,15,19,20],lat:[4,8,16],later:[0,4,6,12,16],lateral_structur:7,latest:17,layer:[0,21],lead:[6,7],lear:21,learn:21,learning_r:21,lectur:1,left:[6,7,8,12,16],length:[4,6,9,16],leurent:17,level:[0,4,8,12],lib:6,libavcodec:18,libavformat:18,libfreetype6:18,libportmidi:18,librari:21,libsdl1:18,libsdl:18,libsmpeg:18,libswscal:18,light:12,like:20,line:[4,8,16],line_typ:4,linear:[7,8],linearli:10,linearvehicl:7,linetyp:4,list:[0,3,4,5,6,7,8,16,19,20,21],load:[19,21],local:[4,6,16,18],local_coordin:4,locat:[9,16],log:[6,9],longi:4,longitudin:[0,4,6,9,12,15,16],longitudinal_structur:7,look:[6,20],lookahead:8,low:[0,8,13],lower:[7,10,19],mai:[7,20],main:[4,13,19],maintain:[7,13],make:[0,10,12,13,14,15,16,17,20,23],make_on_lan:9,maneuv:7,mani:16,manual:[18,23],map:[0,10,16],mappingproxi:[0,4,6,16,20],marcin:1,margin:4,martin:1,master:18,match:[6,20],matter:12,max_spe:9,max_steering_angl:8,maxim:[7,19],maximum:[0,7,9,19],maximum_spe:7,mcgrew:1,mdp:19,mdpvehicl:8,meant:19,mechan:0,memo:19,merg:[11,12,15,21],merge_acc_gain:7,merge_env:13,merge_target_vel:7,merge_vel_ratio:7,mergeenv:13,merging_speed_reward:13,meta:23,metaclass__:4,metadata:19,method:[0,2,4,5,7,8,9],metric:[9,19],microscop:1,might:0,minim:[7,19],minimum:[0,7],misc:17,mixer1:18,mlppolici:21,mobil:[1,7],mode:19,model:[1,3,7,8,9,19,21],modifi:[9,19],modul:[0,6,20],monitor:19,more:[7,10,12,13,14,15],most:[0,5,10],move:[3,9,16],move_display_window_to:16,moving_factor:16,mtrand:[5,6],multilan:10,multipl:19,munir:14,muno:1,must:[0,6,14,16,18,19],n_sampled_go:21,n_vehicl:12,name:[0,20],natur:20,ndarrai:[0,4,6,7,8,9,10,12,13,14,15,16,19,20],nearbi:[7,20],need:19,negoti:[12,13],neighbour:[6,9,10],neighbour_vehicl:6,network:[5,6,8,12],neural:1,next:[6,8,10,12,14,15,19],next_lan:6,node:[6,8,12],non:[7,8],none:[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20],nonetyp:19,norm:14,normal:[14,20],normalactionnois:21,normalize_ob:20,normalize_reward:12,north:12,note:[1,19],notebook:21,notic:7,novel:1,now:[7,13,20],np_random:[5,6],number:[5,6,9,14,16,19,20],numpi:[0,4,5,6,7,8,9,10,12,13,14,15,16,18,19,20,21],nut:17,object:[0,4,5,6,9,10,13,16,19,20],object_:16,obs:21,observ:[0,1,2,10,12,13,14,15,17,19,23],observation_factori:20,observation_shap:20,observation_typ:19,observationtyp:[19,20],observe_intent:[9,12,20],obstacl:[5,6],obtain:6,occup:23,occupancygrid:20,occupancygridobserv:20,occur:[12,13,15],occurr:[10,12],off:9,offscreen:16,offscreen_rend:[10,13,14,15,20],offset:16,often:[12,19],ois:1,old:7,on_lan:4,on_road:9,on_state_upd:9,one:[7,8,9,16],ongo:19,onli:[0,7,9,19],opd:21,optim:19,optimist:1,option:[0,4,6,9,17,19,20],order:[0,9,19,20],origin:[6,16],origin_po:16,origin_vehicl:9,oscil:4,other:[5,7,8,9,10,12,14,15,19,20],other_vehicles_typ:[10,13,15],out:10,outer:12,output:7,output_lan:7,over:[10,12,13,14,15,20],overal:7,overload:[10,12,13,14,15,19],overrid:7,overridden:9,own:[7,12,17,23],packag:[6,17],page:1,paltchedandrean17:[1,9],panda:[6,9,20],param:[6,10,19,20],paramet:[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20],parametr:[2,4],parametris:7,park:[11,21],parking_env:14,parkingenv:14,pass:[12,13,15,19,20],path:[6,19],penalti:[13,19],per:21,perception_dist:19,perform:[0,7,8,10,12,13,14,15,19,20],peter:1,phase:4,philip:1,physic:[1,3],pick:6,piec:17,pieter:1,pilot:8,pip:18,pix:16,pixel:16,placehold:20,plan:[1,6,8,15,21],plan_route_to:8,plasma:1,pleas:17,point:0,polack:1,polici:[7,19,21],policy_frequ:[10,13,14,15,20],policy_kwarg:21,polit:7,popul:[10,12,13,15,19],pos2pix:16,pos:16,posit:[4,6,7,9,14,16],position_devi:12,position_heading_along_rout:6,possibl:[7,15],pre:0,preced:[6,7],precis:12,predict:[5,8,12,20,21],predict_trajectori:8,predict_trajectory_constant_spe:8,preferred_lan:19,prerequisit:17,presenc:12,present:19,preserv:19,principl:21,print:21,prioriti:[4,5,12],problemat:20,process:[0,1,20],project:[6,17,18],propag:9,properti:[0,7,8,9,12],proport:8,provid:[4,8,16,17,19],proxim:14,pseudorandom:19,psi:[8,9],psi_:8,psi_l:8,psi_r:8,pub:6,publish:17,pulsat:4,purpl:16,purpos:[12,17],pursuit_tau:8,pygam:[16,18,20],python3:[6,18],python:18,quick:[17,21],quit:12,rachel:1,rad:[0,4,7,8],radiu:4,rai:1,rais:20,ramp:[12,13,15],random:[5,6,9,10,14,19],randomize_behavior:7,randomize_behaviour:19,randomli:[6,9],randomst:[5,6],rang:[0,8,9,20,21],rate:8,rather:0,ratio:9,rbg:16,reach:[7,10,14],reachabl:[4,9],real:21,realist:7,rear_vehicl:7,reason:[7,12],receiv:10,recent:[5,6],recommend:18,record:[1,5,6,19],record_histori:[5,6],recov:7,recover_from_stop:7,rectangl:[16,20],red:16,refer:[0,4,6,8,16,20],regress:7,regul:3,regulatedroad:5,regulation_frequ:5,reinforc:21,rel:[9,20],relat:1,releas:17,remov:19,render:[16,19,20,21],render_ag:[10,13,14,15],repeat:9,replai:[1,21],repositori:17,repr:[6,9],repres:[6,9,16,20],reproduc:19,requir:[7,18,20],research:1,reset:[0,10,12,13,14,15,16,19,20,21],resolut:20,resolv:5,resp:7,respect:[0,7,8,16],respect_prior:5,respons:9,result:12,revers:7,review:1,reward:[2,10,12,13,14,15,17,19,21,23],reward_weight:14,rgb:20,rgb_arrai:19,right:[4,5,6,7,8,10,12,13,16,20],right_lane_reward:[10,13,15],rightmost:10,rlss:21,road:[0,4,7,8,9,10,12,13,14,15,16,19,20,23],road_network:6,road_object:[5,6],roadgraph:16,roadnetwork:[3,5,6],roadobject:[6,9,16],roadobjectgraph:16,roadsurfac:16,room:13,rotat:16,roundabout:[11,16,21],roundabout_env:15,roundaboutenv:15,rout:[6,7,8,15],row:20,rudimentari:12,rule:5,run:[20,21],sac:21,safe:[7,13],safeti:7,same:[6,7,8,9],same_lan:6,save:[8,21],save_imag:16,scale:[10,12,13,14,15,16,20],scaling_factor:16,scene:[20,23],schedul:12,schneider:1,scienc:1,screen:16,screen_height:[10,12,13,14,15,16,20],screen_width:[10,12,13,14,15,16,20],search:6,second:[5,6],section:3,see:[4,6,7,8,9,16,19,20],see_behind:[6,20],seed:19,self:[4,6,7,8,9,16,19,20],separ:[0,16],sequenc:[4,7,8,9,16],server:20,set:[0,5,6,8,16,19,20],set_agent_action_sequ:16,set_agent_displai:16,set_mod:20,set_preferred_lan:19,set_route_at_intersect:[8,19],set_vehicle_field:19,setpoint:0,sever:[0,6,7,10,12,13,14,15,19,20],shape:20,shortest:6,shortest_path:6,should:[5,6,7,16,19,20],show_rect:16,show_trajectori:[10,13,14,15],shuffl:20,side:[4,10,16],side_lan:6,sign:9,signal:[10,12,19],signatur:[4,6,7,8,9,16,19,20],similarli:0,simpl:[7,8,12],simpli:12,simplifi:19,simul:[0,1,7,8,10,12,14,15,16,19,20],simulation_frequ:[10,13,14,15,16],sin:9,sin_h:[12,14,20],sinc:[12,20],sinelan:4,singl:19,sinusoid:4,site:6,situat:12,size:[16,20],slightli:16,slip:9,slower:[0,12],some:[0,5,6,8,9,10,13,14,19],sometim:12,soon:13,sophist:12,sort:20,sourc:[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20],south:12,space:[0,9,14,16,19,20],spawn_prob:12,specif:[10,12,13,14,15,16,20],specifi:[0,8,9],speed:[0,7,8,9,10,13,14,19],speed_control:8,speed_count:8,speed_devi:12,speed_limit:4,speed_max:8,speed_min:8,speed_to_index:8,spot:14,sqrt:7,stabl:21,stable_baselin:21,stack:20,stack_siz:20,stackoverflow:16,stai:[6,10,20],start:[4,6,13,16,17],start_phas:4,state:[1,7,8,9,10,12,13,14,15,16,19,20],staticmethod:[6,16],statist:1,steer:[0,7,8,9,14],steering_control:[7,8],steering_featur:7,steering_paramet:7,steering_rang:[0,7,14],step:[5,6,7,9,10,12,14,15,19,20,21],still:19,stop:[5,7,9],store:[6,7,9],str:[6,7,8,9,12,19,20],straight:[4,10,12,13,14,20],straight_road_network:6,straightlan:4,string:6,stripe:[4,16],stripe_length:16,stripe_spac:16,stripe_width:16,striped_lin:16,stripes_count:16,stuck:7,subclass:0,subvers:18,success:21,success_goal_reward:14,sudo:18,suffer:13,suggest:7,sum:20,supplementari:[4,14],support:7,surf:16,surfac:23,symposium:1,system:[1,4,9,12,16],take:[0,5,7,20],tan:9,target:[0,5,6,7,8],target_lane_index:[7,8],target_spe:[7,8],target_veloc:7,task:[10,12,13,14,15,19,21],tau_a:8,tau_d:8,td3:21,term:7,termin:[10,12,14,15,19],text:[7,8,16],than:[0,7,20],thank:16,thei:[0,5,7,13,16,20],them:[5,10,14,16],thh00:[1,7],thi:[0,4,7,10,12,13,15,18,19,20],thing:12,those:8,though:7,throttl:[0,8],through:[0,3,5],thu:0,tild:7,time:[3,5,7,8,10,23],time_w:7,timer:7,timestep:[5,6,7,8,9,10,12,14,15,19],timetocollis:[13,15,20],timetocollisionobserv:20,titl:17,to_dict:9,to_finite_mdp:19,tobin:1,too:12,top:[0,8],topic:1,topolog:6,track:[0,8],traffic:[1,12,13,15],train:17,trajectori:[1,5,6,8,16,21],trajectory_timestep:8,transit:[13,21],transpar:16,transport:1,treiber:1,trigger:7,ttf2:18,tupl:[0,4,5,6,7,8,9,10,12,14,15,16,19],turn:[8,12],tutori:21,two:[3,5,7,8,16],type:[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20],unavail:0,under:8,underbrac:7,uniform:20,union:[0,4,7,8,9,10,16,19],uniqu:6,unsaf:7,until:[5,9,10,12,14,15,19],updat:[8,9,16,18],url:17,use:[14,17,19],used:[0,7,9,14,19,20,21],useful:19,user:[17,18],using:[0,2,7,16,18,20,21],usr:6,usual:5,v_0:7,v_r:8,v_y:20,valu:[0,19,20],variat:8,variou:19,vec2pix:16,vec:16,vehicl:[0,1,5,6,7,8,9,10,12,13,14,15,16,19,23],vehicle_class:0,vehicle_class_path:19,vehicle_length:4,vehiclegraph:16,vehicles_count:[10,12,20],veloc:[0,5,7,8,9],verbos:21,verg:14,version:18,vertic:12,video:19,viewer:[16,19],visual:16,wai:[4,5,12],wait:12,want:19,weak:[0,4,6,16,20],weight:[7,14,20],welcom:12,welind:1,well:[13,15],west:12,what:20,wheel:[7,8,9],when:[5,6,7,8,10,12,13,15,20],where:[0,6,7,8,9,14,19,20],whether:[0,4,5,6,7,16,19],which:[0,5,6,7,12,14,16,18,19,20],white:16,who:[4,5],whole:[16,19],whose:[6,7],why:7,width:[4,9,16],width_at:4,window:16,window_posit:16,within:[6,16,20],without:[16,19,20],wojciech:1,wolski:1,won:19,world:[4,6,23],worldsurfac:16,would:16,wrapper:19,written:21,wrong:7,yaw:8,year:17,yellow:16,yield:[5,8],yield_dur:5,yielding_color:5,you:17,your:[17,23],zaremba:1,zero:[10,20],zoom:16},titles:["Actions","Bibliography","Configuring an environment","Dynamics","Lane","Road regulation","Road","Behavior","Control","Kinematics","Highway","The Environments","Intersection","Merge","Parking","Roundabout","Graphics","Welcome to highway-env\u2019s documentation!","Installation","Make your own environment","Observations","Getting Started","Rewards","User Guide"],titleterms:{"default":[10,12,13,14,15],"try":21,The:11,action:0,agent:21,all:21,api:[0,4,5,6,7,8,9,10,12,13,14,15,16,19,20],behavior:7,bibliographi:1,bit:20,cite:17,close:20,colab:21,collis:20,configur:[2,10,12,13,14,15,20],content:17,continu:0,control:[0,8],discret:0,document:17,drive:20,dynam:3,east:20,ego:20,env:17,environ:[2,11,19,21],exampl:20,farther:20,featur:20,get:21,googl:21,graphic:16,grayscal:20,grid:20,guid:23,head:8,highwai:[10,17],how:17,imag:20,instal:18,intersect:12,kinemat:[9,20],lane:4,later:[7,8],latest:18,longitudin:[7,8],make:[19,21],manual:0,merg:13,meta:0,north:20,observ:20,occup:20,one:20,own:19,park:14,posit:8,prerequisit:18,presenc:20,regul:5,releas:18,reward:22,road:[3,5,6],roundabout:15,same:20,scene:16,slower:20,speed:20,start:21,surfac:16,thi:17,time:20,train:21,ubuntu:18,usag:[10,12,13,14,15],user:23,v_x:20,vehicl:[3,20],welcom:17,window:18,work:17,world:16,your:19}})