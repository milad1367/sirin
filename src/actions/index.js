
export const giveSteps = (steps) => ({
    type: 'GIVE_STEP',
    steps :  steps
}) 
export const giveStepsPast = (number) => ({
    type: 'GIVE_STEPS_PAST',
    StepsPast: number
}) 

export const getGyroscope = (xyz) => ({
    type:'GET_GYROSCOPE',
    value:xyz
})
export const getGps = (value) => ({
    type:'GET_GPS',
    value:value
})
export const getError = (value) => ({
    type:'GET_ERROR',
    value:value
})
export const GetStartPos = ( value ) => ({
    type:'GET_START_POS',
    value:value
})
export const GetEndPos = ( value ) => ({
    type:'GET_END_POS',
    value:value
})
export const SetSession = ( text ) => ({
    type:'SET_SESSION',
    text
})

export const StepsChecker = ( value ) => ({
    type:'STEPS_CHECKER',
    value
})

export const DateValue = (value)=>({
    type : 'GET_DATE_VALUE',
    value
})
export const setRealSteps = ( value ) => ({
    type:'SET_REAL_STEPS',
    value
})
export const setPedoSteps = (value) => ({
    type:'SET_PEDO_STEPS',
    value
})
export const setGpsAlarmFlag = (value) => ({
    type:'SET_GPS_ALARM_FLAG',
    value
})

