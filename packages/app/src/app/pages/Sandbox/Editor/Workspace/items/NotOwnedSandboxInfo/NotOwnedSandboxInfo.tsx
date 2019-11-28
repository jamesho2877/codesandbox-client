import React, { useState } from 'react';
import { useOvermind } from 'app/overmind';
import { Dependencies } from '../../Dependencies';
import Files from '../../Files';
import { SandboxInfo } from './SandboxInfo';
import { BookmarkTemplateButton } from '../../Project/BookmarkTemplateButton';
import { WorkspaceItem } from '../../WorkspaceItem';

export const NotOwnedSandboxInfo = () => {
  const [editActions, setEditActions] = useState(null);
  const {
    state: { editor },
  } = useOvermind();
  const staticTemplate = editor.currentSandbox.template === 'static';

  return (
    <div style={{ marginTop: '1rem' }}>
      <SandboxInfo sandbox={editor.currentSandbox} />
      {editor.currentSandbox.customTemplate && <BookmarkTemplateButton />}

      <WorkspaceItem
        actions={editActions}
        defaultOpen
        style={{ marginTop: '.5rem' }}
        title="Files"
      >
        <Files setEditActions={setEditActions} />
      </WorkspaceItem>
      {!staticTemplate ? (
        <WorkspaceItem
          defaultOpen
          style={{ marginTop: '.5rem' }}
          title="Dependencies"
        >
          <Dependencies />
        </WorkspaceItem>
      ) : null}
    </div>
  );
};
