import NetInfo from '@react-native-community/netinfo';
import { SyncDatabaseChangeSet, synchronize } from '@nozbe/watermelondb/sync'
import { database } from './index'
import supabase from './supabase'


// Função para verificar se há conexão à internet
const verificarConexaoInternet = async () => {
  const state = await NetInfo.fetch();
  return state.isConnected;
};

// Função para sincronizar automaticamente quando houver conexão à internet
const sincronizarAutomaticamente = async () => {
  const isConnected = await verificarConexaoInternet();
  if (isConnected) {
    await syncData(); // Chamando a função de sincronização
  } else {
    console.log('Sem conexão à internet, aguardando...');
  }
};

// Chame esta função sempre que desejar iniciar a sincronização automática
export {sincronizarAutomaticamente}

// Definindo um ouvinte para detectar alterações na conexão à internet
NetInfo.addEventListener(state => {
  if (state.isConnected) {
    sincronizarAutomaticamente(); // Sincronizar automaticamente quando a conexão é reestabelecida
  }
});


async function syncData() {
    console.log("syncData")
    await synchronize({
        database,
        pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
            console.log('pull')
          const { data, error } = await supabase.rpc('pull', {
            last_pulled_at: lastPulledAt,
          })
          console.log(data)
          console.log(error)
          const { changes, timestamp } = data as {
            changes: SyncDatabaseChangeSet
            timestamp: number
          }
          if(error){
              throw new Error(`Pull Changes: ${error.message}`)
          }
          console.log(changes)
          return { changes, timestamp }
        },
        pushChanges: async ({ changes, lastPulledAt }) => {
            console.log('push')
          const { error } = await supabase.rpc('push', { changes })
        },
        sendCreatedAsUpdated: true,
      })
}
