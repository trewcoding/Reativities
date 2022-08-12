import { useEffect } from 'react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivites();
  }, [activityStore])

  if (activityStore.loadingInitial) return <LoadingComponent content='Loading App' />

  return (
    <div>
      <NavBar/>
      <ActivityDashboard/>
    </div>
  );
}

export default observer(App);
