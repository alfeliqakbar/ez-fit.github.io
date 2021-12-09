import API_ENDPOINT from '../globals/api-endpoint';

class WorkoutPlanGeneratorSource {
  static async getRandomWorkoutPlan() {
    const response = await fetch(API_ENDPOINT.WORKOUT_PLAN_GENERATOR);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default WorkoutPlanGeneratorSource;