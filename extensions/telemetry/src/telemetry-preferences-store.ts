import { Store } from "@k8slens/extensions";
import { observable, toJS, makeObservable } from "mobx";

export type TelemetryPreferencesModel = {
  enabled: boolean;
};

export class TelemetryPreferencesStore extends Store.ExtensionStore<TelemetryPreferencesModel> {

  @observable  enabled = true;

  private constructor() {
    super({
      configName: "preferences-store",
      defaults: {
        enabled: true
      }
    });
    makeObservable(this);
  }

  protected fromStore({ enabled }: TelemetryPreferencesModel): void {
    this.enabled = enabled;
  }

  toJSON(): TelemetryPreferencesModel {
    return toJS({
      enabled: this.enabled
    });
  }
}

export const telemetryPreferencesStore = TelemetryPreferencesStore.getInstance<TelemetryPreferencesStore>();
