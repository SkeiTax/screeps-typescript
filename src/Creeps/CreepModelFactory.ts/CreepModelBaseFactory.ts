import { CreepModel } from "Creeps/CreepModel";
import { CreepModelBuilder } from "Creeps/CreepModelBuilder";
import { ICreepModelFactory } from "./ICreepModelFactory";
import { CreepRoles } from "Creeps/CreepRoles";

export class CreepModelBaseFactory implements ICreepModelFactory
{
    harvecterBuilder: CreepModelBuilder
    builderBuilder: CreepModelBuilder
    upgraderBuilder: CreepModelBuilder
    repairerBuilder: CreepModelBuilder
    transporterBuilder: CreepModelBuilder
    minerBuilder: CreepModelBuilder
    scoutBuilder: CreepModelBuilder
    claimerBuilder: CreepModelBuilder
    defenderBuilder: CreepModelBuilder
    remoteHarvesterBuilder: CreepModelBuilder

    constructor()
    {
        this.harvecterBuilder = new CreepModelBuilder().SetRole(CreepRoles.Harvester).AddMove(2).AddWork().AddCarry(2);
        this.builderBuilder = new CreepModelBuilder().SetRole(CreepRoles.Builder).AddMove().AddWork(2).AddCarry();
        this.upgraderBuilder = new CreepModelBuilder().SetRole(CreepRoles.Upgrader).AddMove().AddWork().AddCarry(2);
        this.repairerBuilder = new CreepModelBuilder().SetRole(CreepRoles.Repairer).AddMove().AddWork().AddCarry(2);
        this.transporterBuilder = new CreepModelBuilder().SetRole(CreepRoles.Transporter).AddMove().AddCarry(2);
        this.minerBuilder = new CreepModelBuilder().SetRole(CreepRoles.Miner).AddMove().AddWork(2).AddCarry();
        this.scoutBuilder = new CreepModelBuilder().SetRole(CreepRoles.Scout).AddMove(4).AddAttack();
        this.claimerBuilder = new CreepModelBuilder().SetRole(CreepRoles.Claimer).AddMove();
        this.defenderBuilder = new CreepModelBuilder().SetRole(CreepRoles.Defender).AddMove().AddAttack(2).AddTough(4+10);
        this.remoteHarvesterBuilder = new CreepModelBuilder().SetRole(CreepRoles.RemoteHarvester).AddMove();
    }

    CreateHarvester(): CreepModel {
        return this.harvecterBuilder.SetName("crpHrv"+Game.creeps.length)
                                    .Build()
    }
    CreateBuilder(): CreepModel {
        return this.builderBuilder.SetName("crpBld"+Game.creeps.length)
                                    .Build()
    }
    CreateUpgrader(): CreepModel {
        return this.upgraderBuilder.SetName("crpUpg"+Game.creeps.length)
                                    .Build()
    }
    CreateRepairer(): CreepModel {
        return this.repairerBuilder.SetName("crpRep"+Game.creeps.length)
                                    .Build()
    }
    CreateTransporter(): CreepModel {
        return this.transporterBuilder.SetName("crpTrn"+Game.creeps.length)
                                    .Build()
    }
    CreateMiner(): CreepModel {
        return this.minerBuilder.SetName("crpMin"+Game.creeps.length)
                                    .Build()
    }
    CreateScout(): CreepModel {
        return this.scoutBuilder.SetName("crpSct"+Game.creeps.length)
                                    .Build()
    }
    CreateClaimer(): CreepModel {
        return this.claimerBuilder.SetName("crpClm"+Game.creeps.length)
                                    .Build()
    }
    CreateDefender(): CreepModel {
        return this.defenderBuilder.SetName("crpDfn"+Game.creeps.length)
                                    .Build()
    }
    CreateRemoteHarvester(): CreepModel {
        return this.remoteHarvesterBuilder.SetName("crpRHv"+Game.creeps.length)
                                    .Build()
    }

}
