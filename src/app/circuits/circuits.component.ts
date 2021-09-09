import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CircuitsService } from '../services/circuits.service';
import { Circuit, Race, Driver } from '../models/circuits.model';
interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-circuits',
  templateUrl: './circuits.component.html',
  styleUrls: ['./circuits.component.scss']
})
export class CircuitsComponent implements OnInit {
  public loading: boolean = false;

  circuits: Circuit[] = [];
  races: Race[] | undefined;
  driver: Driver[] | undefined;

  public seasons: number[] = [];
  public activeCompetitionId: number = 1;
  selectedSeason: number | undefined;
  selectedProduct1: any;

  constructor(private circuitsService: CircuitsService) { }

  ngOnInit(): void {
    this.fetchCircuits();
    this.fetchSeasons();
  }

  carouselEvent(event: any) {
    this.activeCompetitionId = this.circuits[event.page].competition.id;
    this.selectedSeason = undefined;
    this.races = undefined;
    this.driver = undefined;
  }

  fetchCircuits() {
    this.circuitsService.fetchCircuitsApi().subscribe(data => {
      this.circuits = data.response;
    })
  }

  fetchSeasons() {
    this.circuitsService.fetchSeasonsApi().subscribe(data => {
      this.seasons = data.response;
    })
  }

  fatchRaces(event: any) {
    this.driver = undefined;
    this.circuitsService.fatchRacesApi({ competition: this.activeCompetitionId, season: event.value, type: 'race' }).subscribe(data => {
      data.response[0]?.id ? this.fatchRankings(data.response[0]?.id) : this.races = [];
    })
  }

  fatchRankings(id: any) {
    this.circuitsService.fatchRankingsApi({ race: id }).subscribe(data => {
      this.races = data.response;
    })
  }

  fatchDriver(id: any) {
    this.circuitsService.fetchDriverApi({ id: id }).subscribe(data => {
      this.driver = data.response;
    })
  }

  changeSelection(event: any) {
    this.fatchDriver(event.data.driver.id);
  }

}


