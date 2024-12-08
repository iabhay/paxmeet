import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
 walletData = [
  {
    image:'assets/images/wallet/MetaMask_Fox.svg',
    title:'MetaMask'
  },
  {
    image:'assets/images/wallet/aave.svg',
    title:'Aave'
  },
  {
    image:'assets/images/wallet/Airswap.svg',
    title:'Airswap'
  },
  {
    image:'assets/images/wallet/Compound.svg',
    title:'Compound'
  },
  {
    image:'assets/images/wallet/ddexsvg.svg',
    title:'DDEX'
  },
  {
    image:'assets/images/wallet/defi-saver.svg',
    title:'Defi Saver'
  },
  {
    image:'assets/images/wallet/dYdX.svg',
    title:'DYDX'
  },
  {
    image:'assets/images/wallet/idex.svg',
    title:'IDEX'
  },
  {
    image:'assets/images/wallet/kyber.svg',
    title:'Kyber'
  },
  {
    image:'assets/images/wallet/maker.svg',
    title:'Maker'
  },
  {
    image:'assets/images/wallet/nuo.svg',
    title:'NUO'
  },
  {
    image:'assets/images/wallet/PoolTogether.svg',
    title:'PoolTogether'
  },
  {
    image:'assets/images/wallet/sablier.svg',
    title:'Sablier'
  },
  {
    image:'assets/images/wallet/set.svg',
    title:'Set'
  },
  {
    image:'assets/images/wallet/uniswap.svg',
    title:'Uniswap'
  },
  {
    image:'assets/images/wallet/zerion.svg',
    title:'Zerion'
  },
 ]
}
