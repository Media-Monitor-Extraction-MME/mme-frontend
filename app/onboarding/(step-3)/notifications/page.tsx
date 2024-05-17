'use client';
import React, { useState, useEffect } from 'react';
import '@/onboarding/_styles/pages/_notifications.scss';
import { useRouter } from 'next/navigation';
import CreateAlert from '@/onboarding/_components/CreateAlert';
import ExampleAlert from '@/onboarding/_components/ExampleAlert';
import AlertList from '@/onboarding/_components/AlertList';
import UpdateProgress from '@/onboarding/libs/UpdateProgress';

const Page: React.FC = () => {
  const router = useRouter();
  const [alerts, setAlerts] = useState<
    Array<{
      value: string;
      source?: string;
      frequency?: string;
      sendTo?: string;
    }>
  >([]);
  const [editableAlert, setEditableAlert] = useState<number | undefined>(
    undefined
  );
  const [createAlert, setCreateAlert] = useState<boolean>(false);

  const onRemove = (index: number) => {
    const newAlerts = [...alerts];
    newAlerts.splice(index, 1);
    setAlerts(newAlerts);
  };

  const onEdit = (index: number) => {
    setEditableAlert(index);
  };

  return (
    <div className="notification-page">
      <h2>Create your alerts</h2>
      <p>
        Stay ahead of the curve by keeping an eye on our diverse range of
        sources! Our platform diligently scans for and highlights engaging and
        trending content across various networks. Set up personalized alerts to
        discover the latest topics, discussions, and media that matter most to
        you, right as they emerge.
      </p>

      {alerts.length > 0 && editableAlert === undefined && !createAlert && (
        <AlertList
          onRemove={(index) => {
            onRemove(index);
          }}
          onEdit={(index) => {
            onEdit(index);
          }}
          onCreate={() => {
            setCreateAlert(true);
          }}
          alerts={alerts}
        />
      )}

      {editableAlert !== undefined && (
        <CreateAlert
          value={alerts[editableAlert].value}
          source={alerts[editableAlert].source ?? ''}
          frequency={alerts[editableAlert].frequency ?? ''}
          sendTo={alerts[editableAlert].sendTo ?? ''}
          onCreate={(alert) => {
            const newAlerts = [...alerts];
            newAlerts[editableAlert] = alert;
            setAlerts(newAlerts);
            setEditableAlert(undefined);
          }}
        />
      )}

      {(alerts.length == 0 || createAlert) && (
        <CreateAlert
          onCreate={(alert) => {
            setAlerts([...alerts, alert]);
            setCreateAlert(false);
          }}
        />
      )}

      <ExampleAlert />

      <div className="btn-group">
        <button
          className="notification-save"
          onClick={() => {
            UpdateProgress({
              notifications: alerts.map((alert) => {
                return {
                  value: alert.value,
                  source: alert.source,
                  frequency: alert.frequency,
                  sendTo: alert.sendTo
                };
              })
            });
            router.replace('/onboarding');
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Page;
