import { Satellite, StarTwoTone } from "@material-ui/icons";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finishing
    //  token : 'BQBLCQcAnctCwpFrdcP60OB8AlU3TyxsH3LTIJ8W0C3YAuJpBVLNYUeQmkxtTaer6nyT90_OVJt1dZeHbUx9PTb6duqEm_rdVGKcQDi-hbo8vFdXE4DXPVYAKpsFHZW1APdrS63t3GaKD9nZQUCNPhQiXlaL36Yp_KXP2A3pk3kPUmVvQipuMJZZCh9lLau4l3FlfVpdaB4D3M3pDGNDUQ'
};

const reducer = (state , action) => {
console.log(action);

switch(action.type) {

    case 'SET_USER':
        return{
            ...state,
            user: action.user
        };

        case 'SET_TOKEN' : 
        return{
            ...state,
            token: action.token 
        };
        case 'SET_PLAYLISTS':
        return{
            ...state,
            playlists: action.playlists,
        };
        case "SET_DISCOVER_WEEKLY":
            return{
            ...state,
            discover_weekly: action.discover_weekly
            };
        default: 
        return state;
}
}

export default reducer;