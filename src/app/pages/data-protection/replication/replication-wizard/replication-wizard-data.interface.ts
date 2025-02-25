import { DatasetSource } from 'app/enums/dataset.enum';
import { EncryptionKeyFormat } from 'app/enums/encryption-key-format.enum';
import { LifetimeUnit } from 'app/enums/lifetime-unit.enum';
import { RetentionPolicy } from 'app/enums/retention-policy.enum';
import { ScheduleMethod } from 'app/enums/schedule-method.enum';
import { SnapshotNamingOption } from 'app/enums/snapshot-naming-option.enum';
import { TransportMode } from 'app/enums/transport-mode.enum';

export interface ReplicationWizardData {
  exist_replication: number;
  source_datasets_from: DatasetSource;
  ssh_credentials_source: number | string;
  source_datasets: string[];
  recursive: boolean;
  custom_snapshots: boolean;
  schema_or_regex: SnapshotNamingOption;
  naming_schema: string;
  name_regex: string;
  target_dataset_from: string;
  ssh_credentials_target: number;
  target_dataset: string;
  encryption: boolean;
  encryption_key_format: EncryptionKeyFormat;
  encryption_key_generate: boolean;
  encryption_key_hex: string;
  encryption_key_passphrase: string;
  encryption_key_location_truenasdb: string;
  encryption_key_location: string;
  transport: TransportMode;
  name: string;
  schedule_method: ScheduleMethod;
  schedule_picker: string;
  readonly: boolean;
  retention_policy: RetentionPolicy;
  lifetime_value: number;
  lifetime_unit: LifetimeUnit;
  periodic_snapshot_tasks?: number[];
  sudo: boolean;
}
